import { Component } from "@angular/core";

@Component({
  selector: 'app-container-instance-access-version',
  template: `
    <h1>Container Instance Access version</h1>
    <div class="component-wrapper">
      <app-container>
        <app-inner>6 - </app-inner>
        <app-inner>7 - </app-inner>
        <app-inner>8 - </app-inner>
        <app-inner>9 - </app-inner>
        <app-inner>10 - </app-inner>
      </app-container>
    </div>
    <hr>
  `
})
export class ContainerInstanceAccessVersionComponent { }