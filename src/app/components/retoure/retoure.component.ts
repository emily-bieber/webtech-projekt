import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RetoureFormComponent } from '../retoure-form/retoure-form.component';

export interface Retoure {
  name: string;
  orderNo: string;
  returnNo: string;
  paymentDueDate: Date;
  returnDueDate: Date;
}

@Component({
  selector: 'app-retoure',
  templateUrl: './retoure.component.html',
  styleUrls: ['./retoure.component.css']
})
export class RetoureComponent implements OnInit {

  sampleData: Retoure[] = [
    {
      name: 'Retoure 1',
      orderNo: 'ON11111',
      returnNo: 'RN11111',
      paymentDueDate: new Date('January 20, 2023 00:00:00'),
      returnDueDate: new Date('January 10, 2023 00:00:00'),
    },
    {
      name: 'Retoure 2',
      orderNo: 'ON22222',
      returnNo: 'RN22222',
      paymentDueDate: new Date('February 10, 2023 00:00:00'),
      returnDueDate: new Date('February 20, 2023 00:00:00'),
    },
    {
      name: 'Retoure 3',
      orderNo: 'ON33333',
      returnNo: 'RN33333',
      paymentDueDate: new Date('March 10, 2023 00:00:00'),
      returnDueDate: new Date('March 20, 2023 00:00:00'),
    },
    {
      name: 'Retoure 4',
      orderNo: 'ON44444',
      returnNo: 'RN44444',
      paymentDueDate: new Date('April 20, 2023 00:00:00'),
      returnDueDate: new Date('April 10, 2023 00:00:00'),
    },
  ]

  secondStep: Retoure[] = []
  thirdStep: Retoure[] = []
  fourthStep: Retoure[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Retoure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openForm(): void {
    this.dialog.open(RetoureFormComponent, {
      width: '50%',
      height: 'auto'
    });
  }
}
