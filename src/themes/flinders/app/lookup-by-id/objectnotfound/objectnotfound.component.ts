import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ObjectNotFoundComponent as BaseComponent } from '../../../../../app/lookup-by-id/objectnotfound/objectnotfound.component';

@Component({
  selector: 'ds-objnotfound-flinders',
  styleUrls: ['../../../../../app/lookup-by-id/objectnotfound/objectnotfound.component.scss'],
  templateUrl: '../../../../../app/lookup-by-id/objectnotfound/objectnotfound.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

/**
 * This component representing the `PageNotFound` DSpace page.
 */
export class ObjectNotFoundComponent extends BaseComponent {}

