
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {LoadingService} from "./service/loading/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Marvel Like App';

  private isHome:boolean = false;
  private loading:boolean = true;

  constructor(private router: Router, private loader:LoadingService) {}

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd && event.hasOwnProperty('url')) {
          this.isHome = event['url'] === '/';
        }
      });

    this.loader.event().subscribe((event) => this.loading = event);
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}
