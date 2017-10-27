import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideTreeComponent } from './aside-tree.component';
import { SharedModule } from '../../module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [AsideTreeComponent],
  exports: [AsideTreeComponent]
})
export class AsideTreeModule { }
