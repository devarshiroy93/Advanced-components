import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';

export type CheckboxNode = {
  id: number,
  label: string;
  checked: boolean;
  children: CheckboxNode[];
};



@Component({
  selector: 'app-nested-checkbox-container',
  templateUrl: './nested-checkbox-container.component.html',
  styleUrl: './nested-checkbox-container.component.css'
})
export class NestedCheckboxContainerComponent implements OnInit {


  http$: HttpClient = inject(HttpClient)

  ngOnInit(): void {
    this.getData();
  }

  checkboxData: CheckboxNode[] = [];


  getData() {
    this.http$.get<{ data: CheckboxNode[] }>('assets/nested-checkbox-mock.json')
      .pipe(map(res => res.data))
      .subscribe((data) => {
        this.checkboxData = data;
      });
  }

  handleChange(value: number) {
    console.log('VALUE--->', value);
    this.checkboxData = this.markAsChecked(value, this.checkboxData);
  }

  markAsChecked(id: number, checkBoxData: CheckboxNode[]): CheckboxNode[] {
    let modVal: CheckboxNode[] = [];
    if (id) {
      modVal = checkBoxData.map((data: CheckboxNode) => {
        if (data.id === id) {
          return {
            ...data,
            checked: true
          }
        } else {
          return {
            ...data,
            children: this.markAsChecked(id, data.children)
          }
        }
      })
    }
    return modVal
  }
}
