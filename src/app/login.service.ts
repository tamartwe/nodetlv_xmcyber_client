import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
 
import { LoginDetails } from './login-details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin' :'*' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient) {}

  private loginUrl = 'http://localhost:80/login/';
  
  followUser(username: string, password: string): Observable<any> {
    const url = `${this.loginUrl}`;
    const loginDetails = new LoginDetails();
    loginDetails.username = username;
    loginDetails.password = password;
    console.log(JSON.stringify(loginDetails));
    return this.http.post(url, loginDetails, httpOptions).pipe(
      catchError(this.handleError<any>(`Login loginDetails=${JSON.stringify(loginDetails)}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
