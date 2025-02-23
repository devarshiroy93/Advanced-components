import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Node } from '../folder-structure-container/folder-structure-container.component';




@Component({
  selector: 'app-folder-structure',
  standalone: true,
  imports: [],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.css'
})


export class FolderStructureComponent {

  @Input()
  nodes: Node[] = [];

  @Output()
  showFolderContents: EventEmitter<number> = new EventEmitter();

  @Input()
  showFolderContentsState: { [key: number]: boolean } = {};

  @Output()
  addFolder: EventEmitter<number> = new EventEmitter();

  @Output()
  deleteFolder: EventEmitter<number> = new EventEmitter();

  onShowFolderContent(id: number) {
    this.showFolderContents.emit(id)
  }

  onAddFolder(id: number) {
    console.log('ID---->', id);
    this.addFolder.emit(id);
  }

  onDeleteFolder(id: number) {
    console.log('ID DELETE-->', id);
    this.deleteFolder.emit(id)
  }

}
