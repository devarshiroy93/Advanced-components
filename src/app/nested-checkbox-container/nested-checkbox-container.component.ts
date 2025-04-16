import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';

export type CheckboxNode = {
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
}
