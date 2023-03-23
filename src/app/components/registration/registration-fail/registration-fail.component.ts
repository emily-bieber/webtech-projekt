import { Component, Inject, OnInit } from '@angular/core';
import { DialogData } from '../registration.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-fail',
  templateUrl: './registration-fail.component.html',
  styleUrls: ['./registration-fail.component.css']
})
export class RegistrationFailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
