import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialogue',
  templateUrl: './confirmation-dialogue.component.html',
  styleUrls: ['./confirmation-dialogue.component.css']
})
export class ConfirmationDialogueComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogueComponent>) { }

  ngOnInit(): void {
  }
  confirm(){
    this.dialogRef.close('confirm')
  }
  cancel(){
    this.dialogRef.close('cancel')
  }


}
