import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedCheckboxContainerComponent } from './nested-checkbox-container.component';

describe('NestedCheckboxContainerComponent', () => {
  let component: NestedCheckboxContainerComponent;
  let fixture: ComponentFixture<NestedCheckboxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedCheckboxContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedCheckboxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
