import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';

import { TableConfig } from '../../../core/components/list/list.component';
import { Trucks } from '../../../mock/mock-data';
import { TRUCK_CONFIG } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-index',
  templateUrl: './truck-index.component.html',
  styleUrls: ['./truck-index.component.scss']
})
export class TruckIndexComponent implements OnInit {
  tableConfig: Array<TableConfig>;
  trucks$: Observable<Truck[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = TRUCK_CONFIG;
    this.trucks$ = of(Trucks.list);
  }

  detailTruck(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    if (r) {
      
    }
    // Call API Delete Truck
  }
  
  editTruck(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }
}
