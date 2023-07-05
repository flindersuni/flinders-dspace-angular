import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { PublicationComponent as BaseComponent } from '../../../../../../../app/item-page/simple/item-types/publication/publication.component';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent('Publication', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
  selector: 'ds-publication-flinders',
  styleUrls: ['../../../../../../../app/item-page/simple/item-types/publication/publication.component.scss'],
  templateUrl: '../../../../../../../app/item-page/simple/item-types/publication/publication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlindersPublicationComponent extends BaseComponent {

}
