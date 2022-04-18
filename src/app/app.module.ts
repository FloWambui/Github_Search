import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepoNameComponent } from './components/repo-name/repo-name.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResultsRepoComponent } from './components/results-repo/results-repo.component';
import { BoldDirective } from './directives/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoNameComponent,
    NameResultComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ResultsRepoComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
