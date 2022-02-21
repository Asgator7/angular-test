import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepsComponent } from './components/steps/steps.component';
import { ContentComponent } from './components/content.component';
import { InitialComponent } from './components/informations/initial/initial.component';
import { DocumentsComponent } from './components/informations/documents/documents.component';
import { RegisterDataComponent } from './components/informations/register-data/register-data.component';
import { AdmissionComponent } from './components/informations/admission/admission.component';
import { SituationCardComponent } from './components/informations/common/situation-card/situation-card.component';

@NgModule({
  declarations: [
    StepsComponent,
    ContentComponent,
    InitialComponent,
    DocumentsComponent,
    RegisterDataComponent,
    AdmissionComponent,
    SituationCardComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContentModule { }
