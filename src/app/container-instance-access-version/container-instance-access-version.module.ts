import { NgModule } from "@angular/core";
import { ContainerInstanceAccessVersionComponent } from "./container-instance-access-version.component";
import { ContainerComponent } from "./container.component";
import { InnerComponent } from "./inner.component";

@NgModule({
  declarations: [
    ContainerComponent,
    InnerComponent,
    ContainerInstanceAccessVersionComponent,
  ],
  exports: [
    ContainerInstanceAccessVersionComponent,
  ]
})
export class ContainerInstanceAccessVersionModule { }