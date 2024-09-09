import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  urlChuck: string = 'https://api.chucknorris.io/jokes/random'

  constructor(private http: HttpClient) {}


  getRandom() {
    return this.http.get<{ value: string }>(this.urlChuck).pipe(
      catchError(err => {
        alert(err?.message || 'Oups, une erreur');
        return of({ value: '' });
      })
    );
  }
}
