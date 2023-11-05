import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { DisplayCollectionComponent } from './display-collection/display-collection.component';

const ROUTES: Routes = [
  { path: 'collections', component: CollectionsComponent },
  { path: 'collection', component: DisplayCollectionComponent },
];

export { ROUTES };

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
