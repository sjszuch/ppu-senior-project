import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSplashComponent } from './components/page-splash/page-splash.component';

const routes: Routes = [
  {path: '', component: PageSplashComponent},
  {path: 'splash', component: PageSplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
