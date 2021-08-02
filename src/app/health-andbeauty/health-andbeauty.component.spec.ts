import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthANDbeautyComponent } from './health-andbeauty.component';

describe('HealthANDbeautyComponent', () => {
  let component: HealthANDbeautyComponent;
  let fixture: ComponentFixture<HealthANDbeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthANDbeautyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthANDbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
