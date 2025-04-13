import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoredoComponent } from './undoredo.component';

describe('UndoredoComponent', () => {
  let component: UndoredoComponent;
  let fixture: ComponentFixture<UndoredoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndoredoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
