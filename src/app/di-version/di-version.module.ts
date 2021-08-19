import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container.component";
import { DiVersionComponent } from "./di-version.component";
import { InnerComponent } from "./inner.component";

@NgModule({
  declarations: [
    ContainerComponent,
    InnerComponent,
    DiVersionComponent,
  ],
  exports: [
    DiVersionComponent,
  ]
})
export class DiVersionModule { }