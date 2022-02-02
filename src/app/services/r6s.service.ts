import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Match } from '../models/match.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class R6sService {
  private TEAM_ID = 126963;

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getMatches(): Observable<Match[]> {
    return this.http
      .get(
        `https://api.pandascore.co/csgo/matches?filter\[opponent_id\]=${this.TEAM_ID}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}