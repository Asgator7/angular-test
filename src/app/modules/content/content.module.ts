import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepsComponent } from './content/steps/steps.component';
import { ContentComponent } from './content/content.component';
import { InitialComponent } from './content/informations/initial/initial.component';
import { DocumentsComponent } from './content/informations/documents/documents.component';
import { RegisterDataComponent } from './content/informations/register-data/register-data.component';
import { AdmissionComponent } from './content/informations/admission/admission.component';
import { SituationCardComponent } from './content/informations/common/situation-card/situation-card.component';

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
