import { Component } from "@angular/core";

@Component({
  selector: 'app-parent-communication-version',
  template: `
    <h1>Parrent Communication version</h1>
    <div class="component-wrapper">
      <app-container (changeState)="state = $event" #container>
        <app-inner [newState]="state">1 - </app-inner>
        <app-inner [newState]="state">2 - </app-inner>
        <app-inner [newState]="state">3 - </app-inner>
        <app-inner [newState]="state">4 - </app-inner>
        <app-inner [newState]="state">5 - </app-inner>
      </app-container>
    </div>
    <hr>
  `
})
export class ParentCommunicationVersionComponent {
  public state: boolean = false;
}