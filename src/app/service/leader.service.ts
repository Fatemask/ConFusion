import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";
import {Observable, of} from "rxjs";
import { delay, map, catchError } from "rxjs/operators";
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  getLeader() : Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL+'leadership').pipe(delay(500))
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }
  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL+'leadership?featured=true').pipe(map((leader) => leader[0])).pipe(delay(2000));
  }

}
