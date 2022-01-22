import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'screen2.component.html',
})
export class Screen2Component {
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToScreen(number: number): void {
    this.router.navigate([`screen${number}`], {
      relativeTo: this.route.parent,
      //skipLocationChange: true,
    });
  }
}
