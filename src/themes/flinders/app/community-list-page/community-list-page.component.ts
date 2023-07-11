import { Component } from '@angular/core';
import { CommunityListPageComponent as BaseComponent } from '../../../../app/community-list-page/community-list-page.component';

@Component({
  selector: 'ds-community-list-page-flinders',
  templateUrl: '../../../../app/community-list-page/community-list-page.component.html'
})

/**
 * Page with title and the community list tree, as described in community-list.component;
 * navigated to with community-list.page.routing.module
 */
export class FlindersCommunityListPageComponent extends BaseComponent {}

