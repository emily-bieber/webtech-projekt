import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Retoure } from '../../shared/models/retoure';
import { AuthService } from 'app/shared/services/auth.service';
import { User } from 'app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sampleData: Retoure[] = [
    {
      name: 'Retoure 1',
      orderNo: 'ON11111',
      returnNo: 'RN11111',
      paymentDueDate: new Date('January 20, 2023 00:00:00'),
      returnDueDate: new Date('January 10, 2023 00:00:00'),
      notes: '',
    },
    {
      name: 'Retoure 2',
      orderNo: 'ON22222',
      returnNo: 'RN22222',
      paymentDueDate: new Date('February 10, 2023 00:00:00'),
      returnDueDate: new Date('February 20, 2023 00:00:00'),
      notes: '',
    },
    {
      name: 'Retoure 3',
      orderNo: 'ON33333',
      returnNo: 'RN33333',
      paymentDueDate: new Date('March 10, 2023 00:00:00'),
      returnDueDate: new Date('March 20, 2023 00:00:00'),
      notes: '',
    },
    {
      name: 'Retoure 4',
      orderNo: 'ON44444',
      returnNo: 'RN44444',
      paymentDueDate: new Date('April 20, 2023 00:00:00'),
      returnDueDate: new Date('April 10, 2023 00:00:00'),
      notes: '',
    },
  ]

  secondStep: Retoure[] = []
  thirdStep: Retoure[] = []
  fourthStep: Retoure[] = []

  loggedInUser: User = this.auth.user;

  constructor(private auth: AuthService) { }

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

}
