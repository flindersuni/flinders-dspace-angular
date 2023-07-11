import { Component } from '@angular/core';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-flinders-header',
  styleUrls: ['../../../../app/header/header.component.scss'],
  templateUrl: 'header.component.html',
})
export class FlindersHeaderComponent extends BaseComponent {
}
