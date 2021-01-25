import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PantMeasurementsComponent } from './pant-measurements.component';

describe('PantMeasurementsComponent', () => {
  let component: PantMeasurementsComponent;
  let fixture: ComponentFixture<PantMeasurementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PantMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
