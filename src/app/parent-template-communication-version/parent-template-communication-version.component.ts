import { Component } from "@angular/core";

@Component({
  selector: 'app-parent-template-communication-versionn',
  template: `
    <h1>Parrent Template Communication version</h1>
    <div class="component-wrapper">
      <app-container #container>
        <app-inner [newState]="container.state">1 - </app-inner>
        <app-inner [newState]="container.state">2 - </app-inner>
        <app-inner [newState]="container.state">3 - </app-inner>
        <app-inner [newState]="container.state">4 - </app-inner>
        <app-inner [newState]="container.state">5 - </app-inner>
      </app-container>
    </div>
    <hr>
  `
})
export class ParentTemplateCommunicationVersionComponent { }