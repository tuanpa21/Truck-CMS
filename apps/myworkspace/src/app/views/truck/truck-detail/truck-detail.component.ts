import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';

import { MOCK_TRUCK } from '../../../core/mock-data/mock';
import { TRUCK_CONFIG } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.scss']
})
export class TruckDetailComponent implements OnInit {
  truckDetail$: Observable<Truck>;
  detailInfo: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detailInfo = TRUCK_CONFIG;
    this.truckDetail$ = of(MOCK_TRUCK[0]);
  }

  editTruck(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    if (r) {
      
    }
    // Call API Delete Truck
  }
}
