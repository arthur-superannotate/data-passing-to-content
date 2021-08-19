import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerInstanceAccessVersionModule } from './container-instance-access-version/container-instance-access-version.module';
import { DiVersionModule } from './di-version/di-version.module';
import { DirectiveVersionModule } from './directive-version/directive-version.module';
import { ParentCommunicationVersionModule } from './parent-communication-version/parent-communication-version.module';
import { ParentTemplateCommunicationVersionModule } from './parent-template-communication-version/parent-template-communication-version.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DiVersionModule,
    DirectiveVersionModule,
    ParentCommunicationVersionModule,
    ParentTemplateCommunicationVersionModule,
    ContainerInstanceAccessVersionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
