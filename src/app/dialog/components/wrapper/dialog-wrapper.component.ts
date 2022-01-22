import {
  Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { take } from 'rxjs/operators';

@Component({
  templateUrl: 'dialog-wrapper.component.html',
})
export class DialogWrapperComponent implements AfterViewInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.dispatchDialog();
  }

  dispatchDialog(): void {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '600px',
      disableClose: false,
    });

    dialogRef
      .afterOpened()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['screen1'], {
          relativeTo: this.route,
          //skipLocationChange: true,
        });
      });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
