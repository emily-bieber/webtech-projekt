import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoureComponent } from './retoure.component';

describe('RetoureComponent', () => {
  let component: RetoureComponent;
  let fixture: ComponentFixture<RetoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
