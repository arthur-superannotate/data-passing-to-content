import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container.component";
import { InnerComponent } from "./inner.component";
import { ParentCommunicationVersionComponent } from "./parent-communication-version.component";

@NgModule({
  declarations: [
    ContainerComponent,
    InnerComponent,
    ParentCommunicationVersionComponent,
  ],
  exports: [
    ParentCommunicationVersionComponent,
  ]
})
export class ParentCommunicationVersionModule { }