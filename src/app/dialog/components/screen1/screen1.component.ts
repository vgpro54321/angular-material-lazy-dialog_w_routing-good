import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'screen1.component.html',
})
export class Screen1Component {
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToScreen2(): void {
    this.router.navigate(['screen2'], {
      relativeTo: this.route.parent,
      ///skipLocationChange: true,
    });
  }
}
