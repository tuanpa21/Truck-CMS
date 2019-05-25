import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@myworkspace/api-interface";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: "myworkspace-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>("/api/hello");
  currentPageTitle$: Observable<string>;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.currentPageTitle$ = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.routeConfig && child.routeConfig['data']) {
                return child.routeConfig['data']['title'];
              } else {
                return null;
              }
            }
            return null;
          })
        );
  }
}
