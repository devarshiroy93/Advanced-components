import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownitemComponent } from './dropdownitem.component';

describe('DropdownitemComponent', () => {
  let component: DropdownitemComponent;
  let fixture: ComponentFixture<DropdownitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
