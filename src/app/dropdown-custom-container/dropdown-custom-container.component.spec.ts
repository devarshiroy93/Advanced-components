import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCustomContainerComponent } from './dropdown-custom-container.component';

describe('DropdownCustomContainerComponent', () => {
  let component: DropdownCustomContainerComponent;
  let fixture: ComponentFixture<DropdownCustomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownCustomContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCustomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
