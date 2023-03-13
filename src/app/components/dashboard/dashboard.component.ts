import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Retoure } from '../../shared/models/retoure';
import { AuthService } from 'app/shared/services/auth.service';
import { User } from 'app/shared/models/user';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RetoureFormComponent } from '../retoure-form/retoure-form.component';
import { RetourenService } from 'app/shared/services/retouren.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stepOne: Retoure[] = []
  stepTwo: Retoure[] = []
  stepThree: Retoure[] = []
  stepFour: Retoure[] = []

  loggedInUser: User = {_id: '', username: '', email: '', password: ''};

  RetourenForUser: Retoure[] = [];

  constructor(private auth: AuthService, private service: RetourenService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loggedInUser = this.auth.user;
    this.service.getReturnsForUserAndStatus(this.loggedInUser._id, 'stepOne').subscribe((res) => {
      console.log(res);
      this.stepOne = res;
    });
    this.service.getReturnsForUserAndStatus(this.loggedInUser._id, 'stepTwo').subscribe((res) => {
      console.log(res);
      this.stepTwo = res;
    });
    this.service.getReturnsForUserAndStatus(this.loggedInUser._id, 'stepThree').subscribe((res) => {
      console.log(res);
      this.stepThree = res;
    });
    this.service.getReturnsForUserAndStatus(this.loggedInUser._id, 'stepFour').subscribe((res) => {
      console.log(res);
      this.stepFour = res;
    });
  }

  changeStatus(step: Retoure[],newStatus: string): void {
    step.forEach((retoure: Retoure) => {
      if (retoure.status != newStatus) {
        retoure.status = newStatus;
        this.service.updateReturn(retoure._id, retoure).subscribe();
        console.log('retoure: ' + retoure._id + ', newStatus: ' + retoure.status);
      }
    })
  }

  droppedInOne(event: CdkDragDrop<Retoure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.changeStatus(this.stepOne ,'stepOne');
    }
  }

  droppedInTwo(event: CdkDragDrop<Retoure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.changeStatus(this.stepTwo, 'stepTwo');
    }
  }

  droppedInThree(event: CdkDragDrop<Retoure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.changeStatus(this.stepThree, 'stepThree');
    }
  }

  droppedInFour(event: CdkDragDrop<Retoure[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.changeStatus(this.stepFour, 'stepFour');
    }
  }

  openForm(): void {
    this.dialog.open(RetoureFormComponent, {
      width: '50%',
      height: 'auto'
    });
  }
}
