import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Retoure } from 'app/shared/models/retoure';
import { RetourenService } from 'app/shared/services/retouren.service';

@Component({
  selector: 'app-delete-retoure',
  templateUrl: './delete-retoure.component.html',
  styleUrls: ['./delete-retoure.component.css']
})
export class DeleteRetoureComponent implements OnInit {

  constructor(private service: RetourenService, @Inject(MAT_DIALOG_DATA) public retoure: Retoure) { }

  ngOnInit(): void {
  }

  deleteRetoure() {
    this.service.deleteReturn(this.retoure._id).subscribe();
  }

}
