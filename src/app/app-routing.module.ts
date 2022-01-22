import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'dialog',
    outlet: 'dlg',
    loadChildren: () =>
      import('./dialog/dialog.module').then((m) => m.DialogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
