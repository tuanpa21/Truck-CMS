import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoType } from '@myworkspace/api-interface';
import { Observable } from 'rxjs';

import { TableConfig } from '../../../core/components/list/list.component';

@Component({
  selector: 'myworkspace-cargo-index',
  templateUrl: './cargo-index.component.html',
  styleUrls: ['./cargo-index.component.scss']
})
export class CargoIndexComponent implements OnInit {
  cargo$: Observable<CargoType>;
  tableConfig: TableConfig[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  detailCargo(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteCargo(event) {
    const r = confirm('Are you sure?');
    if (r) {
      
    }
    // Call API Delete Truck
  }
  
  editCargo(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }
}
