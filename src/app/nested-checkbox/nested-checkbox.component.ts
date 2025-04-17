import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxNode } from '../nested-checkbox-container/nested-checkbox-container.component';

@Component({
  selector: 'app-nested-checkbox',
  templateUrl: './nested-checkbox.component.html',
  styleUrl: './nested-checkbox.component.css'
})
export class NestedCheckboxComponent {

  @Input()
  nodes: CheckboxNode[] = [];

  @Output()
  check: EventEmitter<number> = new EventEmitter<number>();

  handleCheck(event: Event , node : CheckboxNode) {
    if ((event?.target as HTMLInputElement).checked) {
      console.log('HELLOOOO');
      this.check.emit(node.id);
    }
  }
  handleChange(id: number){
    this.check.emit(id)
  }
}
