import { Component } from '@angular/core';
import { ForgotPasswordFormComponent as BaseComponent } from '../../../../../app/forgot-password/forgot-password-form/forgot-password-form.component';

@Component({
  selector: 'ds-forgot-password-form-flinders',
  styleUrls: ['../../../../../app/forgot-password/forgot-password-form/forgot-password-form.component.scss'],
  templateUrl: '../../../../../app/forgot-password/forgot-password-form/forgot-password-form.component.html'
})
/**
 * Component for a user to enter a new password for a forgot token.
 */
export class ForgotPasswordFormComponent extends BaseComponent {
}
