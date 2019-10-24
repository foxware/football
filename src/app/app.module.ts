import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@Angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './components/results/results.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddResultComponent } from './components/add-result/add-result.component';
import { AboutComponent } from './components/pages/about/about.component';
import { MatchFormComponent } from './components/match-form/match-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HeaderComponent,
    AddResultComponent,
    AboutComponent,
    MatchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
