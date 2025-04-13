import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoredodemoComponent } from './undoredodemo.component';

describe('UndoredodemoComponent', () => {
  let component: UndoredodemoComponent;
  let fixture: ComponentFixture<UndoredodemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndoredodemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoredodemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
