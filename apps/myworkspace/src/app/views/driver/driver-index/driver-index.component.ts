import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { TableConfig } from '../../../core/components/list/list.component';
import { Drivers } from '../../../mock/mock-data';
import { DRIVER_CONFIG } from '../config/driver-config';

@Component({
  selector: 'myworkspace-driver-index',
  templateUrl: './driver-index.component.html',
  styleUrls: ['./driver-index.component.scss']
})
export class DriverIndexComponent implements OnInit {
  driver$: Observable<Driver[]>;
  tableConfig: TableConfig[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = DRIVER_CONFIG;
    this.getList();
  }

  detailDriver(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteDriver(event) {
    const r = confirm('Are you sure?');
    if (r) {
      const index = Drivers.list.findIndex(it => it.id == event.id);
      Drivers.list.splice(
        index,
        1
      );
      this.getList();
      alert('Delete Driver Success');
    }
    
  }
  
  editDriver(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  getList() {
    this.driver$ = of(Drivers.list).pipe(map(list => {
      return list.map(it => {
        return {
          ...it,
          createdDate: (new Date()).toDateString()
        }
      });
    }));
  }
}
