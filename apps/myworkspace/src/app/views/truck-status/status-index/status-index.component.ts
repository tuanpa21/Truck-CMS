import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { TableConfig } from '../../../core/components/list/list.component';
import { TruckStatus } from '../../../mock/mock-data';
import { TRUCK_STATUS_CONFIG } from '../config/truck-status-config';

@Component({
  selector: 'myworkspace-status-index',
  templateUrl: './status-index.component.html',
  styleUrls: ['./status-index.component.scss']
})
export class StatusIndexComponent implements OnInit {
  status$: Observable<Status[]>;
  tableConfig: TableConfig[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = TRUCK_STATUS_CONFIG;
    this.getList();
  }

  detailStatus(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteStatus(event) {
    const r = confirm('Are you sure?');
    if (r) {
      const index = TruckStatus.list.findIndex(it => it.id == event.id);
      TruckStatus.list.splice(
        index,
        1
      );
      this.getList();
      alert('Delete Truck Status Success');
    }
    
  }
  
  editStatus(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  getList() {
    this.status$ = of(TruckStatus.list).pipe(map(list => {
      return list.map(it => {
        return {
          ...it,
          createdDate: (new Date()).toDateString()
        }
      });
    }));
  }
}
