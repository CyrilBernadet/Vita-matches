import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getMatches(teams: number[]): Observable<Match[]> {
    return this.http
      .get(
        `${environment.apiUrl}/matches?teamIds=${teams.join(',')}`
      )
      .pipe(map(this.utilsService.mapResponseToMatch));
  }
}
