import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-custom-dialog',
  templateUrl: './my-custom-dialog.component.html'
})
export class MyCustomDialogComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<MyCustomDialogComponent>){}

  onClose(): void {
    this.dialogRef.close(this.name);
  }
}
