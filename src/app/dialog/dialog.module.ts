import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DialogWrapperComponent } from './components/wrapper/dialog-wrapper.component';
import { Screen1Component } from './components/screen1/screen1.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { Screen3Component } from './components/screen3/screen3.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: DialogWrapperComponent,
        children: [
          {
            path: 'screen1',
            component: Screen1Component,
          },
          {
            path: 'screen2',
            component: Screen2Component,
          },
          {
            path: 'screen3',
            component: Screen3Component,
          },
        ],
      },
    ]),
  ],
  declarations: [
    Screen1Component,
    Screen2Component,
    Screen3Component,
    DialogWrapperComponent
  ],
  providers: [MatIconRegistry]
})
export class DialogModule {}
