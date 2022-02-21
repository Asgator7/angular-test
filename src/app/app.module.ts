import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideNavComponent } from './components/menu/side-nav/side-nav.component';
import { TopNavComponent } from './components/menu/top-nav/top-nav.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { ChecklistComponent } from './components/menu/footer/checklist/checklist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SharedModule } from './modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    FooterComponent,
    ChecklistComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
