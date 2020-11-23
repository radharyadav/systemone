import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   

    constructor(private http: HttpClient){

    } 

    private extractData(res: any) {
        let body = res;
        return body || {};
      }

    getApiicall(): Observable<any> {
        return this.http.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge').pipe(map(this.extractData));
      }
     
      
}