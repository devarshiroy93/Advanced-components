import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { FolderStructureComponent } from "../folder-structure/folder-structure.component";

export interface Node {
  id: number;
  name: string;
  isFolder: boolean;
  children: Node[];
}

@Component({
  selector: 'app-folder-structure-container',
  standalone: true,
  imports: [FolderStructureComponent],
  template: `
    <div>
      <app-folder-structure 
      [nodes]="nodesData"
      (showFolderContents)="onShowFolderContent($event)"
      [showFolderContentsState]="folderOpenCloseState"
      (addFolder) = "onAddFolder($event)"
      (deleteFolder)="onDeleteFolder($event)"
      ></app-folder-structure>
    </div>
  `,
  styleUrl: './folder-structure-container.component.css'
})
export class FolderStructureContainerComponent {

  private http$ = inject(HttpClient);

  nodes$: Observable<Node[]> = of([]);
  nodesData: Node[] = []

  folderOpenCloseState: { [key: number]: boolean } = {};

  ngOnInit(): void {
    //this.nodes$ = this.http$.get<{ structure: Node[] }>('assets/folder-structure.json').pipe(map(data => data.structure));


    this.http$.get<{ structure: Node[] }>('assets/folder-structure.json')
      .pipe(map(data => data.structure))
      .subscribe(data => {
        this.nodesData = data;
      });


  }

  onShowFolderContent(id: number) {
    this.folderOpenCloseState[id] = !this.folderOpenCloseState[id];
  }
  onAddFolder(id: number) {

    this.nodesData = this.addFolder(this.nodesData, id);
    console.log('this.nodesData--->', this.nodesData);
  }

  private getRandomNumber() {
    return Math.floor(Math.random() * (99999 - 100 + 1)) + 100;
  }

  private addFolder(nodes: Node[], id: number): Node[] {
    const updatedNodesData = nodes.map((node: Node) => {
      if (node.id === id) {
        return {
          ...node,
          children: [...node.children, { id: this.getRandomNumber(), isFolder: true, name: 'New Folder', children: [] }]
        }
      } else if (node.isFolder && node.children) {
        return {
          ...node,
          children: this.addFolder(node.children, id)
        }
      }
      else { return node };

    });

    return updatedNodesData;
  }

  onDeleteFolder(id: number) {
    console.log('id', id);
    this.nodesData = this.deleteFolder(this.nodesData, id);
  }

  private deleteFolder(nodes: Node[], id: number): Node[] {

    return nodes.filter((node) => {
      return node.id !== id;
    }).map((node) => {
      return {
        ...node,
        children: node.children ? this.deleteFolder(node.children, id) : []
      }
    });



  }

}
