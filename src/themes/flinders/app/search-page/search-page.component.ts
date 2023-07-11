import { Component } from '@angular/core';
import { SearchPageComponent as BaseComponent } from '../../../../app/search-page/search-page.component';
import { SEARCH_CONFIG_SERVICE } from '../../../../app/my-dspace-page/my-dspace-page.component';
import { SearchConfigurationService } from '../../../../app/core/shared/search/search-configuration.service';

@Component({
  selector: 'ds-search-page-flinders',
  templateUrl: '../../../../app/search-page/search-page.component.html',
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService
    }
  ]
})

/**
 * This component represents the whole search page
 * It renders search results depending on the current search options
 */
export class FlindersSearchPageComponent extends BaseComponent {}

