import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckIndexComponent } from './truck-index.component';

describe('TruckIndexComponent', () => {
  let component: TruckIndexComponent;
  let fixture: ComponentFixture<TruckIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
