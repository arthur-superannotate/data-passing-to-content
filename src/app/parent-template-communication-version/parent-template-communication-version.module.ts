import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContainerComponent } from "./container.component";
import { InnerComponent } from "./inner.component";
import { ParentTemplateCommunicationVersionComponent } from "./parent-template-communication-version.component";

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    ContainerComponent,
    InnerComponent,
    ParentTemplateCommunicationVersionComponent,
  ],
  exports: [
    ParentTemplateCommunicationVersionComponent,
  ]
})
export class ParentTemplateCommunicationVersionModule { }