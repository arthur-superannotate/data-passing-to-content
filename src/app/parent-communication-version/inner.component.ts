import { Component, Input } from "@angular/core";
import { BaseChangeState } from "../base-change-state";

@Component({
  selector: 'app-inner',
  template: `
    <div [class]="state ? 'success' : 'error'"><ng-content></ng-content>{{state ? 'Error' : 'Success'}}</div>
  `,
})
export class InnerComponent extends BaseChangeState {

  @Input() set newState(val: boolean) {
    this.chnageState(val);
  }

}