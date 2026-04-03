import { Component } from '@angular/core';
import { Githubservice,Repo } from '../githubservice';
import { HttpEventType } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-appgit',
  imports: [CommonModule,FormsModule],
  templateUrl: './appgit.html',
  styleUrl: './appgit.css',
})
export class Appgit {
  username: string = 'MirudhulaMaruthanayagam27';
  repos: Repo[] = [];
  fullResponse: any;
  progress: number = 0;
  loading: boolean = false;

  constructor(private githubService: Githubservice) {}

  ngOnInit(): void {}

  fetchRepos() {
    // 1️⃣ Simple GET
    this.githubService.getRepos(this.username).subscribe(
      data => {
        this.repos = data;
        console.log('Simple GET Response:', data);
      },
      err => console.error(err)
    );

    // 2️⃣ Full response
    this.githubService.getReposFullResponse(this.username).subscribe(
      response => {
        this.fullResponse = response;
        console.log('Full Response:', response);
      },
      err => console.error(err)
    );

    // 3️⃣ Events (progress)
    this.loading = true;
    this.githubService.getReposWithEvents(this.username).subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
        this.progress = Math.round((event.loaded / (event.total ?? 1)) * 100);
      } else if (event.type === HttpEventType.Response) {
        this.loading = false;
        console.log('Events GET Response:', event.body);
      }
    });
  }
}
