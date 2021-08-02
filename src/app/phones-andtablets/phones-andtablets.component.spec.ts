import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesANDtabletsComponent } from './phones-andtablets.component';

describe('PhonesANDtabletsComponent', () => {
  let component: PhonesANDtabletsComponent;
  let fixture: ComponentFixture<PhonesANDtabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesANDtabletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesANDtabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
