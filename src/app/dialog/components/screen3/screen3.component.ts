import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'screen3.component.html',
})
export class Screen3Component {
  constructor(private router: Router) {}

  goToScreen2(): void {
    this.router.navigate(['/dialog/screen2'], {
      skipLocationChange: true,
    });
  }

  backToStart(): void {
    this.router.navigate(['/']);
  }
}
