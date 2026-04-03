import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Githubservice {
  private baseURL = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseURL}${username}/repos`);
  }

  getReposFullResponse(username: string): Observable<any> {
    return this.http.get(`${this.baseURL}${username}/repos`, { observe: 'response' });
  }

  getReposWithEvents(username: string): Observable<HttpEvent<any>> {
    return this.http.get(`${this.baseURL}${username}/repos`, { observe: 'events', reportProgress: true });
  }

  getReposWithHeaders(username: string): Observable<Repo[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3+json' 
    });
    return this.http.get<Repo[]>(`${this.baseURL}${username}/repos`, { headers });
  }

  getReposWithParams(username: string): Observable<Repo[]> {
    const params = new HttpParams().set('sort', 'created'); 
    return this.http.get<Repo[]>(`${this.baseURL}${username}/repos`, { params });
  }

  getReposAsText(username: string): Observable<string> {
    return this.http.get(`${this.baseURL}${username}/repos`, { responseType: 'text' });
  }
}