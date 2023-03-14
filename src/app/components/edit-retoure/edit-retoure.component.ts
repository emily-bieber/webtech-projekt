import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Retoure } from 'app/shared/models/retoure';
import { RetourenService } from 'app/shared/services/retouren.service';

@Component({
  selector: 'app-edit-retoure',
  templateUrl: './edit-retoure.component.html',
  styleUrls: ['./edit-retoure.component.css']
})
export class EditRetoureComponent implements OnInit {

  // retoure: Retoure = {_id: '', name: '', orderNo: '', returnNo: '', paymentDueDate: new Date(), returnDueDate: new Date(), notes: '', status: '', userid: ''}

  updateRetoureForm = new FormGroup({
    name: new FormControl(this.sentRetoure.name),
    orderNo: new FormControl(this.sentRetoure.orderNo),
    returnNo: new FormControl(this.sentRetoure.returnNo),
    paymentDueDate: new FormControl(this.sentRetoure.paymentDueDate),
    returnDueDate: new FormControl(this.sentRetoure.returnDueDate),
    notes: new FormControl(this.sentRetoure.notes),
  });

  constructor(private service: RetourenService, @Inject(MAT_DIALOG_DATA) public sentRetoure: Retoure) {

  }

  ngOnInit(): void {
    // console.log('sentRetoure: ' + this.sentRetoure);
    // this.service.getOneReturn(this.sentRetoure._id).subscribe((res) => {
    //   this.retoure = res;
    // });
  }

  updateRetoure(): void {
    const updatedRetoure = {
      _id: this.sentRetoure._id,
      name: this.updateRetoureForm.value.name,
      orderNo: this.updateRetoureForm.value.orderNo,
      returnNo: this.updateRetoureForm.value.returnNo,
      paymentDueDate: this.updateRetoureForm.value.paymentDueDate,
      returnDueDate: this.updateRetoureForm.value.returnDueDate,
      notes: this.updateRetoureForm.value.notes,
      status: this.sentRetoure.status,
      userid: this.sentRetoure.userid
    }
    this.service.updateReturn(this.sentRetoure._id, updatedRetoure).subscribe();
    console.log(updatedRetoure)
    console.log('Retoure geupdated');
  }

}
