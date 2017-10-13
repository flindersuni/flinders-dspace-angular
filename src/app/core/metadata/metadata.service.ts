import 'rxjs/add/operator/first'
import 'rxjs/add/operator/take'

import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Params,
  Router
} from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Bitstream } from '../shared/bitstream.model';
import { CacheableObject } from '../cache/object-cache.reducer';
import { DSpaceObject } from '../shared/dspace-object.model';
import { Item } from '../shared/item.model';
import { Metadatum } from '../shared/metadatum.model';
import { ObjectCacheService } from '../cache/object-cache.service';
import { RemoteDataBuildService } from '../cache/builders/remote-data-build.service';

import { GLOBAL_CONFIG, GlobalConfig } from '../../../config';

@Injectable()
export class MetadataService {

  private initialized: boolean;

  private tagStore: Map<string, MetaDefinition[]>;

  private currentObject: BehaviorSubject<DSpaceObject>;

  constructor(
    private router: Router,
    private objectCacheService: ObjectCacheService,
    private remoteDataBuildService: RemoteDataBuildService,
    private meta: Meta,
    @Inject(GLOBAL_CONFIG) private envConfig: GlobalConfig
  ) {
    this.meta.addTags([
      { property: 'og:title', content: 'DSpace Angular Universal' }
    ]);
    this.initialized = false;
    this.tagStore = new Map<string, MetaDefinition[]>();
  }

  public listenForRouteChange(): void {
    const subscription = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .map((route: ActivatedRoute) => {
        route = this.getCurrentRoute(route);
        return { params: route.params, data: route.data };
      }).subscribe((routeInfo: any) => {
        if (routeInfo.params.value.id && routeInfo.data.value.type) {
          this.objectCacheService.getByUUID(routeInfo.params.value.id, routeInfo.data.value.type)
            .first().subscribe((normalizedObject: CacheableObject) => {
              const dspaceObject = this.remoteDataBuildService.build(normalizedObject) as DSpaceObject;
              if (!this.initialized) {
                this.initialize(dspaceObject);
              }
              this.currentObject.next(dspaceObject);
            });
        } else {
          this.clearMetaTags();
        }
      });
  }

  private initialize(dspaceObject: DSpaceObject): void {
    this.currentObject = new BehaviorSubject<DSpaceObject>(dspaceObject);
    const subscription = this.currentObject.asObservable().distinctUntilKeyChanged('uuid').subscribe(() => {
      this.setMetaTags();
    });
    this.initialized = true;
  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private setMetaTags(): void {

    this.clearMetaTags();

    this.setCitationTitleTag();
    this.setCitationAuthorTags();
    this.setCitationDateTag();
    this.setCitationISSNTag();
    this.setCitationISBNTag();

    this.setCitationLanguageTag();
    this.setCitationKeywordsTag();

    this.setCitationAbstractUrlTag();
    this.setCitationPdfUrlTag();

    if (this.isDissertation()) {
      this.setCitationDissertationNameTag();
      this.setCitationDissertationInstitutionTag();
    }

    if (this.isTechReport()) {
      this.setCitationTechReportInstitutionTag();
    }

    // this.setCitationJournalTitleTag();
    // this.setCitationVolumeTag();
    // this.setCitationIssueTag();
    // this.setCitationFirstPageTag();
    // this.setCitationLastPageTag();
    // this.setCitationDOITag();
    // this.setCitationPMIDTag();

    // this.setCitationFullTextTag();

    // this.setCitationConferenceTag();

    // this.setCitationPatentCountryTag();
    // this.setCitationPatentNumberTag();

  }

  /**
   * Add <meta name="citation_title" ... >  to the <head>
   */
  private setCitationTitleTag(): void {
    const value = this.getMetaTagValue('dc.title');
    this.addMetaTag('citation_title', value);
  }

  /**
   * Add <meta name="citation_author" ... >  to the <head>
   */
  private setCitationAuthorTags(): void {
    const values: string[] = this.getMetaTagValues(['dc.author', 'dc.contributor.author', 'dc.creator']);
    this.addMetaTags('citation_author', values);
  }

  /**
   * Add <meta name="citation_date" ... >  to the <head>
   */
  private setCitationDateTag(): void {
    const value = this.getFirstMetaTagValue(['dc.date.copyright', 'dc.date.issued', 'dc.date.available', 'dc.date.accessioned']);
    this.addMetaTag('citation_date', value);
  }

  /**
   * Add <meta name="citation_issn" ... >  to the <head>
   */
  private setCitationISSNTag(): void {
    const value = this.getMetaTagValue('dc.identifier.issn');
    this.addMetaTag('citation_issn', value);
  }

  /**
   * Add <meta name="citation_isbn" ... >  to the <head>
   */
  private setCitationISBNTag(): void {
    const value = this.getMetaTagValue('dc.identifier.isbn');
    this.addMetaTag('citation_isbn', value);
  }

  /**
   * Add <meta name="citation_language" ... >  to the <head>
   */
  private setCitationLanguageTag(): void {
    const value = this.getMetaTagValue('dc.language.iso');
    this.addMetaTag('citation_language', value);
  }

  /**
   * Add <meta name="citation_dissertation_name" ... >  to the <head>
   */
  private setCitationDissertationNameTag(): void {
    const value = this.getMetaTagValue('dc.title');
    this.addMetaTag('citation_dissertation_name', value);
  }

  /**
   * Add <meta name="citation_dissertation_institution" ... >  to the <head>
   */
  private setCitationDissertationInstitutionTag(): void {
    const value = this.getMetaTagValue('dc.publisher');
    this.addMetaTag('citation_dissertation_institution', value);
  }

  /**
   * Add <meta name="citation_technical_report_institution" ... >  to the <head>
   */
  private setCitationTechReportInstitutionTag(): void {
    const value = this.getMetaTagValue('dc.publisher');
    this.addMetaTag('citation_technical_report_institution', value);
  }

  /**
   * Add <meta name="citation_keywords" ... >  to the <head>
   */
  private setCitationKeywordsTag(): void {
    const value = this.getMetaTagValuesAndCombine('dc.subject');
    this.addMetaTag('citation_keywords', value);
  }

  /**
   * Add <meta name="citation_abstract_html_url" ... >  to the <head>
   */
  private setCitationAbstractUrlTag(): void {
    if (this.currentObject.value instanceof Item) {
      const value = [this.envConfig.ui.baseUrl, this.router.url].join('');
      this.addMetaTag('citation_abstract_html_url', value);
    }
  }

  /**
   * Add <meta name="citation_pdf_url" ... >  to the <head>
   */
  private setCitationPdfUrlTag(): void {
    if (this.currentObject.value instanceof Item) {
      const item = this.currentObject.value as Item;
      // NOTE: Observable resolves many times with same data
      // taking only two, fist one is empty array
      const subscription = item.getFiles().take(2).subscribe((bitstreams: Bitstream[]) => {
        for (const bitstream of bitstreams) {
          if (bitstream.mimetype === 'application/pdf') {
            this.addMetaTag('citation_abstract_html_url', bitstream.content);
            break;
          }
        }
      });
    }
  }

  /**
   * Returns true if this._item is a dissertation
   *
   * @returns {boolean}
   *      true if this._item has a dc.type equal to 'Thesis'
   */
  private isDissertation(): boolean {
    let isDissertation = false;
    for (const metadatum of this.currentObject.value.metadata) {
      if (metadatum.key === 'dc.type') {
        isDissertation = metadatum.value === 'Thesis';
        break;
      }
    }
    return isDissertation;
  }

  /**
   * Returns true if this._item is a technical report
   *
   * @returns {boolean}
   *      true if this._item has a dc.type equal to 'Technical Report'
   */
  private isTechReport(): boolean {
    let isTechReport = false;
    for (const metadatum of this.currentObject.value.metadata) {
      if (metadatum.key === 'dc.type') {
        isTechReport = metadatum.value === 'Technical Report';
        break;
      }
    }
    return isTechReport;
  }

  private getMetaTagValue(key: string): string {
    let value: string;
    for (const metadatum of this.currentObject.value.metadata) {
      if (metadatum.key === key) {
        value = metadatum.value;
      }
    }
    return value;
  }

  private getFirstMetaTagValue(keys: string[]): string {
    let value: string;
    for (const metadatum of this.currentObject.value.metadata) {
      for (const key of keys) {
        if (key === metadatum.key) {
          value = metadatum.value;
          break;
        }
      }
      if (value !== undefined) {
        break;
      }
    }
    return value;
  }

  private getMetaTagValuesAndCombine(key: string): string {
    return this.getMetaTagValues([key]).join('; ');
  }

  private getMetaTagValues(keys: string[]): string[] {
    const values: string[] = [];
    for (const metadatum of this.currentObject.value.metadata) {
      for (const key of keys) {
        if (key === metadatum.key) {
          values.push(metadatum.value);
        }
      }
    }
    return values;
  }

  private addMetaTag(property: string, content: string): void {
    if (content) {
      const tag = { property, content } as MetaDefinition;
      this.meta.addTag(tag);
      this.storeTag(property, tag);
    }
  }

  private addMetaTags(property: string, content: string[]): void {
    for (const value of content) {
      this.addMetaTag(property, value);
    }
  }

  private storeTag(key: string, tag: MetaDefinition): void {
    const tags: MetaDefinition[] = this.getTags(key);
    tags.push(tag);
    this.setTags(key, tags);
  }

  private getTags(key: string): MetaDefinition[] {
    let tags: MetaDefinition[] = this.tagStore.get(key);
    if (tags === undefined) {
      tags = [];
    }
    return tags;
  }

  private setTags(key: string, tags: MetaDefinition[]): void {
    this.tagStore.set(key, tags);
  }

  private clearMetaTags() {
    this.tagStore.forEach((tags: MetaDefinition[], property: string) => {
      this.meta.removeTag("property='" + property + "'");
    });
    this.tagStore.clear();
  }

}
