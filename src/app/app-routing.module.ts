import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './components/content/informations/admission/admission.component';
import { DocumentsComponent } from './components/content/informations/documents/documents.component';
import { InitialComponent } from './components/content/informations/initial/initial.component';
import { RegisterDataComponent } from './components/content/informations/register-data/register-data.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
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
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
