import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

import { AdmissionComponent } from './content/informations/admission/admission.component';
import { DocumentsComponent } from './content/informations/documents/documents.component';
import { InitialComponent } from './content/informations/initial/initial.component';
import { RegisterDataComponent } from './content/informations/register-data/register-data.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: InitialComponent
            },
            {
                path: 'documents',
                component: DocumentsComponent
            },
            {
                path: 'register-data',
                component: RegisterDataComponent
            },
            {
                path: 'admission',
                component: AdmissionComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
