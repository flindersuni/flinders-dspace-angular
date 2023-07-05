import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommunityPageComponent as BaseComponent} from '../../../../app/community-page/community-page.component';
import { fadeInOut } from '../../../../app/shared/animations/fade';


@Component({
  selector: 'ds-community-page-flinders',
  templateUrl: '../../../../app/community-page/community-page.component.html',
  styleUrls: ['../../../../app/community-page/community-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
/**
 * This component represents a detail page for a single community
 */
export class FlindersCommunityPageComponent extends BaseComponent {}
