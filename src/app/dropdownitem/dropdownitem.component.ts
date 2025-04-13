import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdownitem',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class DropdownitemComponent {
  @ViewChild('content', { static: true }) content!: TemplateRef<any>;
}