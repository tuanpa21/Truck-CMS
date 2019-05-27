import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoType } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { TableConfig } from '../../../core/components/list/list.component';
import { Cargo } from '../../../mock/mock-data';
import { CARGO_TYPE_CONFIG } from '../config/cargo-type-config';

@Component({
  selector: 'myworkspace-cargo-index',
  templateUrl: './cargo-index.component.html',
  styleUrls: ['./cargo-index.component.scss']
})
export class CargoIndexComponent implements OnInit {
  cargo$: Observable<CargoType[]>;
  tableConfig: TableConfig[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableConfig = CARGO_TYPE_CONFIG;
    this.getList();
  }

  detailCargo(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteCargo(event) {
    const r = confirm('Are you sure?');
    if (r) {
      const index = Cargo.list.findIndex(it => it.id == event.id);
      Cargo.list.splice(
        index,
        1
      );
      this.getList();
      alert('Delete Cargo Type Success');
    }
    
  }
  
  editCargo(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  getList() {
    this.cargo$ = of(Cargo.list).pipe(map(list => {
      return list.map(it => {
        return {
          ...it,
          createdDate: (new Date()).toDateString()
        }
      });
    }));
  }
}
