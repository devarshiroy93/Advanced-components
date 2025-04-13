import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/components/tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [TabsComponent, TabComponent],
  template: `<app-tabs>
    <app-tab title="Tab 1" [selected]=true>
      <h2>First Tab Content</h2>
    </app-tab>
  
    <app-tab title="Tab 2">
      <h2>Second Tab Content</h2>
    </app-tab>
</app-tabs>
  `,
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent {

}
