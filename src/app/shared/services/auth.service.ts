import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  baseUrl = 'http://localhost:3000';
  user: User = {_id: '', username: '', password: '', email: ''};
  userChange: Subject<User> = new Subject<User>();
  loggedIn = false;
  loggedInChange: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {
    this.loggedInChange.subscribe((value) => {
            this.loggedIn = value
    });
    this.userChange.subscribe((value) => {
            this.user = value
    });
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  getOneUser(username: string): Observable<User>{
    return this.http.get<User>(this.baseUrl + '/users/' + username);
  }

  registerUser(user:User): Observable<any> {
    return this.http.post(this.baseUrl + '/users/register', user);
  }

  loginUser(username: string, password: string ): Observable<any>{
    return this.http.post(this.baseUrl + '/users/login/', { username: username, password: password }, {observe: 'response'});
  }

  isLoggedin(): boolean {
    return this.loggedIn;
  }

  login(user: User): void {
    this.loggedIn = true
    this.loggedInChange.next(this.loggedIn);
    this.user = user;
    this.userChange.next(this.user);
    console.log('login() : ', this.user);
  }

  logout(): void {
    this.loggedIn = false;
    this.loggedInChange.next(this.loggedIn);
    this.user = {_id: '', username: '', password: '', email: ''};
    this.userChange.next(this.user);
  }
}


