import { Component, NgModule, Optional } from "@angular/core";

@Component({
  selector: 'app-container-di-directive-version',
  template: `
    <h1>DI version</h1>
    <div style="display: flex; justify-content: space-evenly">
      <app-container><app-inner></app-inner></app-container>
      <br>
      <app-element></app-element>
    </div>
  `
})
export class ContainerDiDirectiveVersionComponent { }

@Component({
  selector: 'app-container',
  template: `
    <span>app-container id: {{id}}</span>
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      border: 1px solid red;
      margin: 10px;
    }
  `]
})
export class ContainerComponent {
  public readonly id = Math.random();
}

@Component({
  selector: 'app-element',
  template: `
    <span>app-element id: {{id}}</span>
    <app-inner></app-inner>
  `,
  styles: [`
    :host {
      border: 1px solid red;
      margin: 10px;
    }
  `]
})
export class ElementComponent {
  public readonly id = Math.random();
}

@Component({
  selector: 'app-inner',
  template: `
    <span>app-inner id: {{id}}<span>
    <span>parent id: {{parentId}}</span>
  `,
  styles: [`
    :host {
      border: 1px solid red;
      margin: 10px;
    }
  `]
})
export class InnerComponent {
  public readonly id = Math.random();
  public readonly parentId: number;

  constructor(
    @Optional() elementParent: ElementComponent,
    @Optional() containerParent: ContainerComponent,
  ) {
    if (elementParent) this.parentId = elementParent.id;
    else if (containerParent) this.parentId = containerParent.id;
    else this.parentId = -0;
  }
}

@NgModule({
  declarations: [
    ContainerDiDirectiveVersionComponent,
    ContainerComponent,
    ElementComponent,
    InnerComponent,
  ],
  exports: [
    ContainerDiDirectiveVersionComponent,
  ]
})
export class ContainerDiDirectiveVersionModule { }