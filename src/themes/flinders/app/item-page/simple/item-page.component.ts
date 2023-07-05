import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemPageComponent as BaseComponent } from '../../../../../app/item-page/simple/item-page.component';
import { fadeInOut } from '../../../../../app/shared/animations/fade';
import {filter, map} from "rxjs/operators";
import {RemoteData} from "../../../../../app/core/data/remote-data";
import {Item} from "../../../../../app/core/shared/item.model";
import {hasValue} from "../../../../../app/shared/empty.util";
import {Observable} from "rxjs";
import {MetadataMap} from "../../../../../app/core/shared/metadata.models";

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
@Component({
  selector: 'ds-item-page-flinders',
  styleUrls: ['../../../../../app/item-page/simple/item-page.component.scss'],
  //templateUrl: '../../../../../app/item-page/simple/item-page.component.html',
  templateUrl: './item-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class ItemPageComponent extends BaseComponent {

  metadata$: Observable<MetadataMap>;

  //Use the raw values pulled out of the Observable, instead of Async-Piping it in the template
  dcRights: Object
  dcRightsHolder: Object
  dcOaireLicenceConditionLicence:Object
  ngOnInit() {
    // Call our base On-Init, we just want to add to it.
    super.ngOnInit();
    // Pull out the ENTIRE metadata map, same as the 'full' item page
    this.metadata$ = this.itemRD$.pipe(
      map((rd: RemoteData<Item>) => rd.payload),
      filter((item: Item) => hasValue(item)),
      map((item: Item) => item.metadata),);
    this.metadata$.subscribe((data: any) => {
      this.dcRights = data["dc.rights"]
      this.dcOaireLicenceConditionLicence = data["dc.oaire.license.condition.license"]
      this.dcRightsHolder = data["dc.rights.holder"]
    } )
    console.log(this.dcRightsHolder)
    console.log(this.dcRights)
    console.log(this.dcOaireLicenceConditionLicence)
  }
}
