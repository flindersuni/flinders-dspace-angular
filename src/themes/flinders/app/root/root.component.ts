import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../app/shared/animations/slide';
import { RootComponent as BaseComponent } from '../../../../app/root/root.component';

@Component({
  selector: 'ds-root-flinders',
  styleUrls: ['../../../../app/root/root.component.scss'],
  templateUrl: '../../../../app/root/root.component.html',
  animations: [slideSidebarPadding],
})
export class RootComponent extends BaseComponent {

}
