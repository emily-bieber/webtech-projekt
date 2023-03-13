import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRetoureComponent } from './edit-retoure.component';

describe('EditRetoureComponent', () => {
  let component: EditRetoureComponent;
  let fixture: ComponentFixture<EditRetoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRetoureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRetoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
