import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AthleteComponent } from './components/athlete/athlete.component';


const routes: Routes = [
  {path: 'athlete', component: AthleteComponent}
  /*{ path: '', redirectTo: 'home/carousel', pathMatch: 'full' },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
