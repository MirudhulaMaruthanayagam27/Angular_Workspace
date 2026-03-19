import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Githubservice2 ,Repo2} from './githubservice2';

@Component({
  selector: 'app-appgit2',
  imports: [CommonModule,FormsModule],
  templateUrl: './appgit2.html',
  styleUrl: './appgit2.css',
})
export class Appgit2 {
  username: string = 'MirudhulaMaruthanayagam27';
  repos: Repo2[] = [];
  loading: boolean = false;

  constructor(private githubService: Githubservice2) {}

  fetchRepos() {
    if (!this.username) return;
    this.loading = true;
    this.githubService.getRepos(this.username).subscribe(
      data => {
        this.repos = data;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
      }
    );
  }

}
