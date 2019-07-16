import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProfileModel} from '../../services/players/player.model';

@Injectable()
export class PlayersService {
  private host = 'https://web-sandbox.onefootball.com';

    constructor(private http: HttpClient) {}

    search(searchParams: String): Observable<any> {
        return this.http.get<any>(`${this.host}/assignments/player/data/${searchParams}.json`);
    }

    getPlayerProfile(id: string): Observable<ProfileModel> {
        return this.http.get<ProfileModel>(`${this.host}/assignments/player/profile/${id}`);
    }

}
