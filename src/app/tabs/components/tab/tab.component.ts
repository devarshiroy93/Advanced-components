import { NgIf } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() title!: string;
  @Input() selected = false;
  @ViewChild(TemplateRef) content!: TemplateRef<any>;
}
