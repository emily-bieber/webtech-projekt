import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRetoureComponent } from './delete-retoure.component';

describe('DeleteRetoureComponent', () => {
  let component: DeleteRetoureComponent;
  let fixture: ComponentFixture<DeleteRetoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRetoureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRetoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
