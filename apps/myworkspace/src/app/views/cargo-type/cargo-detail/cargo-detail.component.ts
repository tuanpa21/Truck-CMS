import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoType } from '@myworkspace/api-interface';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Cargo } from '../../../mock/mock-data';
import { CARGO_TYPE_CONFIG } from '../config/cargo-type-config';

@Component({
  selector: 'myworkspace-cargo-detail',
  templateUrl: './cargo-detail.component.html',
  styleUrls: ['./cargo-detail.component.scss']
})
export class CargoDetailComponent implements OnInit, OnDestroy {
  cargoDetail$: Observable<CargoType>;
  detailInfo: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detailInfo = CARGO_TYPE_CONFIG;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param.id) {
        const detail = Cargo.list.find(it => it.id == param.id);
        this.cargoDetail$ = of(detail).pipe(map(item => {
            return {
              ...item,
              createdDate: (new Date()).toDateString()
            }
        }));
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  editCargo(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteCargo(event) {
    const r = confirm('Are you sure?');
    const index = Cargo.list.findIndex(it => it.id == event.id);
    if (r) {
      Cargo.list.splice(
        index,
        1
      );
      alert('Delete Cargo Type Success');
      this.router.navigate(['../../index'], { relativeTo: this.route });
    }
    
  }
}
