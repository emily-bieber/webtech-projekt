import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Retoure } from '../../shared/models/retoure';
import { RetourenService } from 'app/shared/services/retouren.service';
import { User } from 'app/shared/models/user';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-retoure-form',
  templateUrl: './retoure-form.component.html',
  styleUrls: ['./retoure-form.component.css']
})
export class RetoureFormComponent implements OnInit {

  loggedInUser: User = {_id: '', username: '', email: '', password: ''};

  retoureForm = new FormGroup({
    name: new FormControl('', Validators.required),
    orderNo: new FormControl('', [Validators.required]),
    returnNo: new FormControl('', [Validators.required]),
    paymentDueDate: new FormControl('', [Validators.required]),
    returnDueDate: new FormControl(''),
    notes: new FormControl(''),
  });

  // newRetoure: Retoure = {_id: '', name: '', orderNo: '', returnNo: '', paymentDueDate: new Date(), returnDueDate: new Date(), notes: ''};

  constructor(private service: RetourenService, private auth: AuthService) {}

  ngOnInit(): void {
    this.loggedInUser = this.auth.user;
  }

  closeAndSave(): void {
    const newRetoure: Retoure = {
      _id: '',
      name: this.retoureForm.value.name,
      orderNo: this.retoureForm.value.orderNo,
      returnNo: this.retoureForm.value.returnNo,
      paymentDueDate: this.retoureForm.value.paymentDueDate,
      returnDueDate: this.retoureForm.value.returnDueDate,
      notes: this.retoureForm.value.notes,
      userid: this.loggedInUser._id,
      status: 'stepOne'
    }
    this.service.createReturn(newRetoure).subscribe();
    console.log(newRetoure)
    console.log('Retoure gespeichert');
  }

}
