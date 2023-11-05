import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';

const ROUTES: Routes = [
  { path: 'collections', component: CollectionsComponent },
];

export { ROUTES };

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
