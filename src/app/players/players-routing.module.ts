import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPlayersComponent } from './search-players/search-players.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SearchPlayersComponent, ProfileComponent, HomeComponent]
})
export class PlayersRoutingModule { }
