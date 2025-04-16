import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NestedCheckboxContainerComponent } from '../nested-checkbox-container/nested-checkbox-container.component';
import { NestedCheckboxComponent } from './nested-checkbox.component';



@NgModule({
  declarations: [
    NestedCheckboxContainerComponent,
    NestedCheckboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NestedCheckboxContainerComponent
    }])
  ]
})
export class NestedCheckboxModule { }
