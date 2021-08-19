import { Component } from "@angular/core";
import { AnyEventsService } from "./any-events.service";

@Component({
  selector: 'app-container',
  template: `
    <div class="container">
      <div class="actions">
        <input type="checkbox" (change)="onClick($event)">: Change State
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  providers: [AnyEventsService]
})
export class ContainerComponent {

  constructor(private readonly _anyEventsService: AnyEventsService) { }

  public onClick(event: any): void {
    this._anyEventsService.dispatchEvent(event.target.checked);
  }

}