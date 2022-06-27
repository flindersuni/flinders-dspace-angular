import { Component } from '@angular/core';
import { CreateProfileComponent as BaseComponent } from '../../../../../app/register-page/create-profile/create-profile.component';

/**
 * Component that renders the create profile page to be used by a user registering through a token
 */
@Component({
  selector: 'ds-create-profile-flinders',
  styleUrls: ['../../../../../app/register-page/create-profile/create-profile.component.scss'],
  templateUrl: '../../../../../app/register-page/create-profile/create-profile.component.html'
})
export class CreateProfileComponent extends BaseComponent {
}
