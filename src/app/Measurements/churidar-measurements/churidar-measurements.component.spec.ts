import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChuridarMeasurementsComponent } from './churidar-measurements.component';

describe('ChuridarMeasurementsComponent', () => {
  let component: ChuridarMeasurementsComponent;
  let fixture: ComponentFixture<ChuridarMeasurementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuridarMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuridarMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
