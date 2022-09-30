import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest as observableCombineLatest, Subscription } from 'rxjs';
import { RemoteData } from 'src/app/core/data/remote-data';
import {Community} from '../../../../../app/core/shared/community.model';
import {PaginatedList} from '../../../../../app/core/data/paginated-list.model';
import {PaginationComponentOptions} from '../../../../../app/shared/pagination/pagination-component-options.model';
import {fadeInOut} from '../../../../../app/shared/animations/fade';
import {SortDirection, SortOptions} from '../../../../../app/core/cache/models/sort-options.model';
import {CommunityDataService} from '../../../../../app/core/data/community-data.service';
import {PaginationService} from '../../../../../app/core/pagination/pagination.service';
import {switchMap} from 'rxjs/operators';
import {hasValue} from '../../../../../app/shared/empty.util';


/**
 * this component renders the Top-Level Community list
 */
@Component({
  selector: 'ds-top-level-community-list-flinders',
  styleUrls: ['./top-level-community-list.component.scss'],
  templateUrl: './top-level-community-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})

export class TopLevelCommunityListComponent implements OnInit, OnDestroy {
  /**
   * A list of remote data objects of all top communities
   */
  communitiesRD$: BehaviorSubject<RemoteData<PaginatedList<Community>>> = new BehaviorSubject<RemoteData<PaginatedList<Community>>>({} as any);

  /**
   * The pagination configuration
   */
  config: PaginationComponentOptions;

  /**
   * The pagination id
   */
  pageId = 'tl';

  /**
   * The sorting configuration
   */
  sortConfig: SortOptions;

  /**
   * The subscription to the observable for the current page.
   */
  currentPageSubscription: Subscription;

  constructor(private cds: CommunityDataService,
              private paginationService: PaginationService) {
    this.config = new PaginationComponentOptions();
    this.config.id = this.pageId;
    this.config.pageSize = 5;
    this.config.currentPage = 1;
    this.sortConfig = new SortOptions('dc.title', SortDirection.ASC);
  }

  ngOnInit() {
    this.initPage();
  }


  /**
   * Update the list of top communities
   */
  initPage() {
    const pagination$ = this.paginationService.getCurrentPagination(this.config.id, this.config);
    const sort$ = this.paginationService.getCurrentSort(this.config.id, this.sortConfig);
    this.currentPageSubscription = observableCombineLatest([pagination$, sort$]).pipe(
      switchMap(([currentPagination, currentSort]) => {
        return this.cds.findTop({
          currentPage: currentPagination.currentPage,
          elementsPerPage: currentPagination.pageSize,
          sort: {field: currentSort.field, direction: currentSort.direction}
        });
      })
    ).subscribe((results) => {
      this.communitiesRD$.next(results);
    });
  }

  /**
   * Unsubscribe the top list subscription if it exists
   */
  private unsubscribe() {
    if (hasValue(this.currentPageSubscription)) {
      this.currentPageSubscription.unsubscribe();
    }
  }

  /**
   * Clean up subscriptions when the component is destroyed
   */
  ngOnDestroy() {
    this.unsubscribe();
    this.paginationService.clearPagination(this.config.id);
  }

}