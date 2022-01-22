import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hello-component',
  template: `
  <h1>Hello!</h1>
  <p>
  Welcome to this Stackblitz where you can see a lazy loaded dialog with the Angular router. This Stackblitz is <a href="https://medium.com/arjenbrandenburgh/future-proof-your-lazy-loaded-images-16160bb51e58" target="_blank">part of an article</a>.
  </p>
  <p>
    Click the button to see some magic happen!
  </p>
  <p>
    <button
      mat-raised-button
      color="primary"
      (click)="goToDialog()"
    >
      Open Dialog
    </button>
  </p>`,
})
export class HelloComponent {
  constructor(private router: Router) {}

  goToDialog(): void {
    //this.router.navigate(['/dialog']);

    this.router.navigate([{ outlets: { dlg: ['dialog'] } }]);
  }
}
