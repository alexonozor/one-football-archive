import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayersService } from '../../services/players/players.service';
import { finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SearchPlayersComponent implements OnInit {

  constructor(
    public playerService: PlayersService,
    public router: Router
  ) { }

  public isSearching = false;
  public error: string = null;
  public searchId: string;

  ngOnInit() {
  }

  searchPlayer(searchId) {
    if (searchId.trim().toLowerCase() === '') { return; }

    this.isSearching = true;
    this.playerService.search(searchId).pipe(
      finalize(() => this.isSearching = false),
      catchError(err => {
        this.error = `Player ${searchId} is not available`;
        return of(err);
      })
    )
      .subscribe((data) => {
        if (data.active === 'false') {
          this.error = `${data.id} is not available, Profile has been disabled.`;
          return;
        }

        if (data.active === 'true') {
          this.router.navigate(['profile', data['profile-id']]);
        }
      });
  }

}
