import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownitemComponent } from '../dropdownitem/dropdownitem.component';




@NgModule({
  declarations: [DropdownComponent , DropdownitemComponent],
  imports: [
    CommonModule
  ],
  exports : [DropdownComponent,DropdownitemComponent]
})
export class DropdownModule { }
