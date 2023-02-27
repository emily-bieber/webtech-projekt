import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retoure } from '../models/retoure';

@Injectable({
  providedIn: 'root'
})
export class RetoureService {
  baseUrl = 'http://localhost:3000/retouren';


  //baseUrl anpassen? 

  constructor(private http: HttpClient) { }

  getAllRetouren(): Observable<Retoure[]>{
    return this.http.get<Retoure[]>(this.baseUrl);
  }

  getOneRetoure(id: string): Observable<Retoure>{
    return this.http.get<Retoure>(this.baseUrl + '/form/' + id);
  }

  add(data: Retoure): Observable<Retoure> {
    console.log('backendanbindung add aufgerufen: ' + data);
    return this.http.post<Retoure>(this.baseUrl, data);
  }

  update(id: string, data: Retoure): Observable<Retoure> {
    return this.http.patch<Retoure>(this.baseUrl + '/' + id, data);
  }

  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }

}