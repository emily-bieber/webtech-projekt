import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retoure } from '../models/retoure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetourenService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  getAllReturns(): Observable<Retoure[]>{
    return this.http.get<Retoure[]>(this.baseUrl + '/retouren');
  }

  getOneReturn(id: string): Observable<Retoure>{
    return this.http.get<Retoure>(this.baseUrl + '/retouren/' + id);
  }

  updateReturn(id: string, newStatus: string): Observable<Retoure>{
    return this.http.get<Retoure>(this.baseUrl + '/retouren/' + id)
  }
}
