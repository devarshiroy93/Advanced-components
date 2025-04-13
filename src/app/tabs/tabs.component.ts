import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './components/tab/tab.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgFor,NgTemplateOutlet,NgIf],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterViewInit {
 @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeTab!: TabComponent;

  constructor(private cdr: ChangeDetectorRef) {}

 
  ngAfterViewInit() {
    // Wait for tab content templates to initialize
    this.activeTab = this.tabs.find(tab => tab.selected) || this.tabs.first;
    this.cdr.detectChanges();
  }

  selectTab(tab: TabComponent) {
    this.activeTab = tab;
  }
}
