import {Component} from '@angular/core';
import {TYPE_REQUEST_REGISTER} from '../../register-email-form/register-email-form.component';
import {
  RegisterEmailComponent as BaseComponent
} from "../../../../../app/register-page/register-email/register-email.component";

@Component({
  selector: 'ds-flinders-register-email',
  styleUrls: ['./register-email.component.scss'],
  templateUrl: './register-email.component.html'
})
/**
 * Component responsible the email registration step when registering as a new user
 */
export class FlindersRegisterEmailComponent extends BaseComponent {
  typeRequest = TYPE_REQUEST_REGISTER;
}
