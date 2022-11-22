import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoureFormComponent } from './retoure-form.component';

describe('RetoureFormComponent', () => {
  let component: RetoureFormComponent;
  let fixture: ComponentFixture<RetoureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
