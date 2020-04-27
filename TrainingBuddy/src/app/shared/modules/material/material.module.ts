import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [MAT_MODULES],
  exports: [MAT_MODULES],
})
export class MaterialModule { }
