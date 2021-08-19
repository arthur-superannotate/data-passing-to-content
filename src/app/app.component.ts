import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-di-version></app-di-version>
    <app-directive-version></app-directive-version>
    <app-parent-communication-version></app-parent-communication-version>
    <app-parent-template-communication-versionn></app-parent-template-communication-versionn>
    <app-container-instance-access-version><app-parent-communication-version>
  `,
  styles: []
})
export class AppComponent { }
