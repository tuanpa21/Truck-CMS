import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusIndexComponent } from './status-index.component';

describe('StatusIndexComponent', () => {
  let component: StatusIndexComponent;
  let fixture: ComponentFixture<StatusIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
