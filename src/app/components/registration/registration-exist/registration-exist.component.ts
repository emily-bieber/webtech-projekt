import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../registration.component';

@Component({
  selector: 'app-registration-exist',
  templateUrl: './registration-exist.component.html',
  styleUrls: ['./registration-exist.component.css']
})
export class RegistrationExistComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }



}
