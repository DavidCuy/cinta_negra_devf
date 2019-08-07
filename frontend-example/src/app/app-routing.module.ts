import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card/card-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'HOME-EXAMPLE' } },
  { path: 'info', component: InfoComponent, data: { title: 'INFO-EXAMPLE' } },
  { path: 'cards', component: CardComponent, data: { title: 'CARD-EXAMPLE' } },
  { path: 'cards/:id', component: CardDetailsComponent, data: { title: 'CARD-EXAMPLE' } },
  { path: 'forms', component: FormsComponent, data: { title: 'Forms-EXAMPLE' } },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
