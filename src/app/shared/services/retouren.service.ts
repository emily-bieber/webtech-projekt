import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retoure } from '../models/retoure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetourenService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/retouren';

  getAllReturns(): Observable<Retoure[]>{
    return this.http.get<Retoure[]>(this.baseUrl);
  }

  getOneReturn(id: string): Observable<Retoure>{
    return this.http.get<Retoure>(this.baseUrl + '/' + id);
  }

  getAllReturnsForUser(userid: string): Observable<Retoure[]>{
    return this.http.get<Retoure[]>(this.baseUrl + '/user/' + userid);
  }

  // getReturnsForStatus(status: string): Observable<Retoure[]> {
  //   return this.http.get<Retoure[]>(`${apiUrlTasksForStatus}/${id}/${status}`);
  // }

  getReturnsForUserAndStatus(userid: string, status: string): Observable<Retoure[]> {
    return this.http.get<Retoure[]>(this.baseUrl + '/user/' + userid + '/' + status);
  }

  createReturn(newRetoure: Retoure): Observable<Retoure> {
    return this.http.post<Retoure>(this.baseUrl + '/', newRetoure);
  }

  updateReturn(id: string, newValues: Retoure): Observable<Retoure>{
    return this.http.patch<Retoure>(this.baseUrl + '/' + id, newValues);
  }

  deleteReturn(id: string){
    return this.http.delete<Retoure>(this.baseUrl + '/' + id);
  }
}
