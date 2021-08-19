import { EventEmitter, Component, Output } from "@angular/core";

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
export class ContainerComponent {
  
  @Output() public readonly changeState: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onClick(event: any): void {
    this.changeState.emit(event.target.checked);
  }

}