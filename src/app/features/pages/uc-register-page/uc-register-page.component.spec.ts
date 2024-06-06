import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcRegisterPageComponent } from './uc-register-page.component';

describe('UcRegisterPageComponent', () => {
  let component: UcRegisterPageComponent;
  let fixture: ComponentFixture<UcRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UcRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
