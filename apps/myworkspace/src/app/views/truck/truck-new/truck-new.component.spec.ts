import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckNewComponent } from './truck-new.component';

describe('TruckNewComponent', () => {
  let component: TruckNewComponent;
  let fixture: ComponentFixture<TruckNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
