import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnglistComponent } from './components/anglist/anglist.component';
import { BlogComponent } from './components/blog/blog.component';
import { WeatherDemoComponent } from './components/weather-demo/weather-demo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'actors', component: AnglistComponent},
  {path: 'posts', component: BlogComponent},
  {path: 'weather', component: WeatherDemoComponent},
  {path: '', pathMatch:'full',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
