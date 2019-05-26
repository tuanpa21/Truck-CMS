import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Message } from '@myworkspace/api-interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { MOCK_CARGO, MOCK_DRIVER, MOCK_STATUS, MOCK_TRUCK, MOCK_TYPE } from './core/mock-data/mock';
import { Cargo, Drivers, Trucks, TruckStatus, TypeTruck } from './mock/mock-data';

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
    
        // Mock data
        Trucks.list.push(...MOCK_TRUCK);
        Cargo.list.push(...MOCK_CARGO);
        Drivers.list.push(...MOCK_DRIVER);
        TruckStatus.list.push(...MOCK_STATUS);
        TypeTruck.list.push(...MOCK_TYPE);
  }
}
