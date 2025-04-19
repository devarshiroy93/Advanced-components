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
  handleUnCheck(value: number) {
    console.log('VALUE--->', value);
    this.checkboxData = this.markAsChecked(value, this.checkboxData, false)
  }
  handleCheck(value: number) {
    console.log('VALUE--->', value);
    this.checkboxData = this.markAsChecked(value, this.checkboxData, true);
  }

  markAsChecked(id: number,
    checkBoxData: CheckboxNode[],
    check: boolean = false,
    forceTrue: boolean = false,
  ): CheckboxNode[] {
    let modVal: CheckboxNode[] = [];
    if (id) {
      modVal = checkBoxData.map((data: CheckboxNode) => {
        if (data.id === id) {
          return {
            ...data,
            checked: check,
            children: this.markAsChecked(id, data.children, check , true)
          }
        } else if (forceTrue) {

          return {
            ...data,
            checked: check,
            children: this.markAsChecked(id, data.children,check, forceTrue)
          }
        } else {
          return {
            ...data,
            children: this.markAsChecked(id, data.children,check)
          }
        }
      })
    }
    return modVal
  }


}
