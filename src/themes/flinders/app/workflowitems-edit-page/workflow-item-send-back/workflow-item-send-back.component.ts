import { Component } from '@angular/core';
import { WorkflowItemSendBackComponent as BaseComponent } from '../../../../../app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component';

@Component({
  selector: 'ds-workflow-item-send-back-flinders',
  // styleUrls: ['workflow-item-send-back.component.scss'],
  // templateUrl: './workflow-item-send-back.component.html'
  templateUrl: '../../../../../app/workflowitems-edit-page/workflow-item-action-page.component.html'
})
/**
 * Component representing a page to send back a workflow item to the submitter
 */
export class FlindersWorkflowItemSendBackComponent extends BaseComponent {
}
