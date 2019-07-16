import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayersRoutingModule} from './players-routing.module';
import {MyOwnCustomMaterialModule} from '../material';
import {PlayersService} from '../services/players/players.service';
import {SearchPlayersComponent} from './search-players/search-players.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MyOwnCustomMaterialModule,
    FormsModule
  ],
  providers: [
    PlayersService
  ],
  declarations: [SearchPlayersComponent, ProfileComponent, HomeComponent]
})
export class PlayersModule { }
