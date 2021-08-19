import { AfterViewInit, Component, ContentChild, ContentChildren, QueryList, TemplateRef } from "@angular/core";
import { InnerDirective } from "./identifying-directives";
import { InnerComponent } from "./inner.component";

@Component({
  selector: 'app-container',
  template: `
    <div class="container">
      <div class="actions">
        <input type="checkbox" (change)="onClick($event)">: Change State
      </div>
      <div class="content">
        <ng-container *ngFor="let inner of inners" [ngTemplateOutlet]="inner.templateRef" [ngTemplateOutletContext]="context"> </ng-container>
      </div>
    </div>
  `,
})
export class ContainerComponent {

  @ContentChildren(InnerDirective) inners!: QueryList<InnerDirective<InnerComponent>>;

  public context = { newState: false };

  public onClick(event: any): void {
    this.context.newState = event.target.checked;
  }

}