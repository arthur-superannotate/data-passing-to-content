import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

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
})
export class ContainerComponent implements OnDestroy {
  
  public readonly changeState = new Subject<boolean>();

  public onClick(event: any): void {
    this.changeState.next(event.target.checked);
  }
  
  ngOnDestroy() {
    this.changeState.complete();
  }

}