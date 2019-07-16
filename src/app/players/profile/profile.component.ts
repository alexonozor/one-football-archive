import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileModel } from '../../services/players/player.model';
import {PlayersService} from '../../services/players/players.service';
import {finalize, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-player-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public $profile: Observable<{} | ProfileModel>;
  public loading: any;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayersService,
    private router: Router
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;
    this.$profile = this.playerService.getPlayerProfile(id)
    .pipe(
      catchError(err => {
        this.router.navigate(['']);
        return of();
      }) // catching errors works simpler than using router guard or resolver;
    );
  }


}
