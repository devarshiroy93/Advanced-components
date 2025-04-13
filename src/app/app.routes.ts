import { Routes } from '@angular/router';
import { DropdownCustomContainerComponent } from './dropdown-custom-container/dropdown-custom-container.component';
import { FolderStructureContainerComponent } from './folder-structure-container/folder-structure-container.component';
import { InfiniteScrollContainerComponent } from './infinite-scroll-container/infinite-scroll-container.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { UndoredodemoComponent } from './undoredodemo/undoredodemo.component';


export const routes: Routes = [
    { path: '', component: FolderStructureContainerComponent },
    { path: 'infinite-scroll', component: InfiniteScrollContainerComponent },
    { path: 'undo-redo', component: UndoredodemoComponent },
    { path: 'tabs', component: TabsContainerComponent },
    {path : 'dropdown' , component : DropdownCustomContainerComponent}
];
