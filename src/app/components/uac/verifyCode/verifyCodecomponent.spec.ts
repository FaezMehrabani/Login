import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCodeComponent } from './verifyCode.component';

describe('ResetPasswordComponent', () => {
  let component: VerifyCodeComponent;
  let fixture: ComponentFixture<VerifyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
