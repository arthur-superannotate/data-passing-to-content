import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container.component";
import { DirectiveVersionComponent } from "./directive-version.component";
import { InnerDirective } from "./identifying-directives";
import { InnerComponent } from "./inner.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ContainerComponent,
    InnerComponent,
    InnerDirective,
    DirectiveVersionComponent,
  ],
  exports: [
    DirectiveVersionComponent,
  ]
})
export class DirectiveVersionModule {}