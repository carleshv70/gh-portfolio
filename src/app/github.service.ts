import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment';


@Injectable({  
  providedIn: 'root'
})
export class GithubService {
  
    // TODO: canviar abans de pujar a GIT
  readonly username = environment.username;
  private userUrl = environment.apiUrl + this.username;
  
  constructor(
    private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }
  
  
}
