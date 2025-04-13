import {
  Component,
  ContentChildren,
  QueryList,
  ViewContainerRef,
  ViewChild,
  EmbeddedViewRef,
  AfterViewInit,
} from '@angular/core';
import { DropdownitemComponent } from '../dropdownitem/dropdownitem.component';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown-container">
      <div class="selected-area" (click)="toggleOpen()">
        <ng-container #selectedContainer></ng-container>
        <span *ngIf="!hasSelection">Please select</span>
      </div>

      <div class="items-container" *ngIf="isOpen">
        <div
          class="dropdown-item"
          *ngFor="let item of items.toArray(); let i = index"
          (click)="selectItem(i)"
        >
          <ng-container *ngTemplateOutlet="item.content"></ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dropdown-container {
      position: relative;
      width: 200px;
      font-family: Arial, sans-serif;
    }

    .selected-area {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      background: white;
      min-height: 20px;
    }

    .items-container {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 4px;
      background: white;
      z-index: 1000;
    }

    .dropdown-item {
      padding: 8px;
      cursor: pointer;
    }

    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class DropdownComponent implements AfterViewInit {
  isOpen = false;
  hasSelection = false;
  selectedIndex: number | null = null;

  @ContentChildren(DropdownitemComponent) items!: QueryList<DropdownitemComponent>;
  @ViewChild('selectedContainer', { read: ViewContainerRef }) selectedContainer!: ViewContainerRef;

  ngAfterViewInit() {
    // Optional: select the first item by default
    // this.selectItem(0);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  selectItem(index: number) {
    const item = this.items.toArray()[index];

    this.selectedContainer.clear();
    const view = item.content.createEmbeddedView({});
    this.selectedContainer.insert(view);

    this.selectedIndex = index;
    this.hasSelection = true;
    this.isOpen = false;
  }
}


