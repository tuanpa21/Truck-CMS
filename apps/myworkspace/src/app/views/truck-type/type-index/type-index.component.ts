import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruckType } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { TableConfig } from '../../../core/components/list/list.component';
import { TypeTruck } from '../../../mock/mock-data';
import { TRUCK_TYPE_CONFIG } from '../config/truck-type-config';

@Component({
  selector: 'myworkspace-type-index',
  templateUrl: './type-index.component.html',
  styleUrls: ['./type-index.component.scss']
})
export class TypeIndexComponent implements OnInit {
  type$: Observable<TruckType[]>;
  tableConfig: TableConfig[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = TRUCK_TYPE_CONFIG;
    this.getList();
  }

  detailType(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteType(event) {
    const r = confirm('Are you sure?');
    if (r) {
      const index = TypeTruck.list.findIndex(it => it.id == event.id);
      TypeTruck.list.splice(
        index,
        1
      );
      this.getList();
      alert('Delete Truck Type Success');
    }
    
  }
  
  editType(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  getList() {
    this.type$ = of(TypeTruck.list).pipe(map(list => {
      return list.map(it => {
        return {
          ...it,
          createdDate: (new Date()).toDateString()
        }
      });
    }));
  }
}
