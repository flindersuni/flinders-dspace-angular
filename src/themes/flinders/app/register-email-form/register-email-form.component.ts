import {Component} from "@angular/core";
import {
  RegisterEmailFormComponent as BaseComponent
} from "../../../../app/register-email-form/register-email-form.component";


export const TYPE_REQUEST_FORGOT = 'forgot';
export const TYPE_REQUEST_REGISTER = 'register';

@Component({
  selector: 'ds-flinders-register-email-form',
  templateUrl: './register-email-form.component.html'
})


export class FlindersRegisterEmailFormComponent extends BaseComponent {
}
