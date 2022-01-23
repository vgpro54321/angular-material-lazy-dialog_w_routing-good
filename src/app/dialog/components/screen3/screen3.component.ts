import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'screen3.component.html',
})
export class Screen3Component {
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToScreen2(): void {
    this.router.navigate(['screen2'], {
      //skipLocationChange: true,
      relativeTo: this.route.parent,
    });
  }

  backToStart(): void {
    this.router.navigate(['/']);
  }
}
