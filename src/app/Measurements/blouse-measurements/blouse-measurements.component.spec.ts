import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlouseMeasurementsComponent } from './blouse-measurements.component';

describe('BlouseMeasurementsComponent', () => {
  let component: BlouseMeasurementsComponent;
  let fixture: ComponentFixture<BlouseMeasurementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlouseMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlouseMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
