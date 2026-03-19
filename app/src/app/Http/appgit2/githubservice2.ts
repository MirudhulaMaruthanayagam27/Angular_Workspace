import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Repo2 {
  name: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class Githubservice2 {
  constructor(private http: HttpClient) {}

  getRepos(username: string): Observable<Repo2[]> {
    return this.http.get<Repo2[]>(`https://api.github.com/users/${username}/repos`);
  }
}


