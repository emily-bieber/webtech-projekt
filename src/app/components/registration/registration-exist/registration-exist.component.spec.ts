import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationExistComponent } from './registration-exist.component';

describe('RegistrationExistComponent', () => {
  let component: RegistrationExistComponent;
  let fixture: ComponentFixture<RegistrationExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
