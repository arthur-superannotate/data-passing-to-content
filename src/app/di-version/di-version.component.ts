import { Component } from "@angular/core";

@Component({
  selector: 'app-di-version',
  template: `
    <h1>DI version</h1>
    <div class="component-wrapper">
      <app-container>
        <app-inner>1 - </app-inner>
        <app-inner>2 - </app-inner>
        <app-inner>3 - </app-inner>
        <app-inner>4 - </app-inner>
        <app-inner>5 - </app-inner>
      </app-container>
      
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
export class DiVersionComponent { }