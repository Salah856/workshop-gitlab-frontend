import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hero} from "../../entity/hero";
import {Observable, of} from "rxjs";
import { catchError } from 'rxjs/operators';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiUrl:string = environment.apiHero;

  constructor(
    private http: HttpClient
  ) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getHero(id:number) : Observable<Hero> {

    const url = `${this.apiUrl}character/${id}`;

    return this.http.get<Hero>(url)
      .pipe(
        catchError(this.handleError<Hero>('`getHero id=${id}`'))
      );
  }

  updateHero(hero:Hero) : Observable<any> {

    const url = `${this.apiUrl}character/${hero.id}`;

    return this.http.put(url, { 'liked' : hero.liked}, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
