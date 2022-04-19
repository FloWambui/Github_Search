import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResultsRepoComponent } from './components/results-repo/results-repo.component';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component:ProfileComponent},
  {path: 'name-result/:username', component: NameResultComponent},
  {path: 'result-repo/:reponame', component: ResultsRepoComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
