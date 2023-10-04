import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyblogsComponent } from '../Blog/myblogs/myblogs.component';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogueBoxService {

 constructor(private dialog: MatDialog) {}

  openConfirmationDialog(): MatDialogRef<ConfirmationDialogueComponent> {
    return this.dialog.open(ConfirmationDialogueComponent, {
      width: '500px',
    });
  }



}
