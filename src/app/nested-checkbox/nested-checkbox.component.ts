import { Component, Input } from '@angular/core';
import { CheckboxNode } from '../nested-checkbox-container/nested-checkbox-container.component';

@Component({
  selector: 'app-nested-checkbox',
  templateUrl: './nested-checkbox.component.html',
  styleUrl: './nested-checkbox.component.css'
})
export class NestedCheckboxComponent {

  @Input()
  nodes: CheckboxNode[] = []
}
