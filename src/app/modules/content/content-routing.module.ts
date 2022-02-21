import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content.component';

import { AdmissionComponent } from './components/informations/admission/admission.component';
import { DocumentsComponent } from './components/informations/documents/documents.component';
import { InitialComponent } from './components/informations/initial/initial.component';
import { RegisterDataComponent } from './components/informations/register-data/register-data.component';

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
