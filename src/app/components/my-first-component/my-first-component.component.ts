import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyCustomDialogComponent } from '../my-custom-dialog/my-custom-dialog.component';

export interface DialogData {
  name: string;
}


@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {

  name: string = '';

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyCustomDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      this.name = result;
    });
  }
}