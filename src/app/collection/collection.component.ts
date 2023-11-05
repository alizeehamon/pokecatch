import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../models/collection.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collection!:Collection

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeCards(id:string){
    this.router.navigate(['/collection'], { queryParams: { id:id } })
  }

}
