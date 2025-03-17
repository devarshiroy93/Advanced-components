import { Routes } from '@angular/router';
import { FolderStructureContainerComponent } from './folder-structure-container/folder-structure-container.component';
import { InfiniteScrollContainerComponent } from './infinite-scroll-container/infinite-scroll-container.component';

export const routes: Routes = [
    { path: '', component: FolderStructureContainerComponent },
    { path: 'infinite-scroll', component: InfiniteScrollContainerComponent}
];
