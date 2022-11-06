import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { URL } from 'src/app/routes';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  users: User[];
  constructor(private http: HttpClient) {
    this.http.get(URL.USER_MOCK).subscribe(res => this.users = res as User[]);
  }

  public getUsers(): Observable<User[]> {
    return of(this.users);
  }

  public addUser(user: User): Observable<object> {
    this.users.push({id: Date.now().toString(), ...user});
    return of({status: 200});
  }

  public deleteUser(user): Observable<object> {
    this.users = this.users.filter(person => person.id !== user.id);
    return of({status: 200});
  }
}
