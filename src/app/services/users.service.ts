import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modles/user';

import { environment } from '../../environments/environment';

@Inject({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`);
  }
}
