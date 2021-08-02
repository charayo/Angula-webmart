import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNowCompComponent } from './trending-now-comp.component';

describe('TrendingNowCompComponent', () => {
  let component: TrendingNowCompComponent;
  let fixture: ComponentFixture<TrendingNowCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingNowCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNowCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
