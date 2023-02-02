import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Pages
import { HomeComponent } from './core/pages/components/home/home.component';
import { AboutComponent } from './core/pages/components/about/about.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path:'about',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
