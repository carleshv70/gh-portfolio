import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gh-portfolio';
  username = "";

   constructor(
    private service: GithubService
   ) {}

   ngOnInit(): void {
      this.username = this.service.username;
   }
}
