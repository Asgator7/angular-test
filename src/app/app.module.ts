import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepsComponent } from './components/steps/steps.component';
import { ContentComponent } from './components/content/content.component';
import { InitialComponent } from './components/informations/initial/initial.component';
import { DocumentsComponent } from './components/informations/documents/documents.component';
import { RegisterDataComponent } from './components/informations/register-data/register-data.component';
import { AdmissionComponent } from './components/informations/admission/admission.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
  // dropSpecialCharacters: false
};

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    FooterComponent,
    StepsComponent,
    ContentComponent,
    InitialComponent,
    DocumentsComponent,
    RegisterDataComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
