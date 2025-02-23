import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderStructureContainerComponent } from './folder-structure-container.component';

describe('FolderStructureContainerComponent', () => {
  let component: FolderStructureContainerComponent;
  let fixture: ComponentFixture<FolderStructureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderStructureContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderStructureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
