import { Component } from "@angular/core";

@Component({
  selector: 'app-directive-version',
  template: `
    <h1>Directive version</h1>
    <div class="component-wrapper">
      <app-container>
        <app-inner *appInner="let newState=newState" [newState]="newState">1 - </app-inner>
        <app-inner *appInner="let newState=newState" [newState]="newState">2 - </app-inner>
        <app-inner *appInner="let newState=newState" [newState]="newState">3 - </app-inner>
        <app-inner *appInner="let newState=newState" [newState]="newState">4 - </app-inner>
        <app-inner *appInner="let newState=newState" [newState]="newState">5 - </app-inner>
      </app-container>
    </div>
    <hr>
  `
})
export class DirectiveVersionComponent {}