import { Component } from "@angular/core";

@Component({
  selector: 'app-container',
  template: `
    <div class="container">
      <div class="actions">
        <input type="checkbox" [(ngModel)]="state">: Change State
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ContainerComponent {
  
  public state = false;

}