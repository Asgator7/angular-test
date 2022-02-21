import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideNavComponent } from './components/menu/side-nav/side-nav.component';
import { TopNavComponent } from './components/menu/top-nav/top-nav.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { StepsComponent } from './components/content/steps/steps.component';
import { ContentComponent } from './components/content/content.component';
import { InitialComponent } from './components/content/informations/initial/initial.component';
import { DocumentsComponent } from './components/content/informations/documents/documents.component';
import { RegisterDataComponent } from './components/content/informations/register-data/register-data.component';
import { AdmissionComponent } from './components/content/informations/admission/admission.component';
import { SituationCardComponent } from './components/content/informations/common/situation-card/situation-card.component';
import { ChecklistComponent } from './components/menu/footer/checklist/checklist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SharedModule } from './modules/shared/shared.module';
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
    AdmissionComponent,
    SituationCardComponent,
    ChecklistComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
