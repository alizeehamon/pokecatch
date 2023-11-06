import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../models/collection.model';

@Component({
  selector: 'app-search-collection',
  templateUrl: './search-collection.component.html',
  styleUrls: ['./search-collection.component.css']
})
export class SearchCollectionComponent implements OnInit {

  @Input() collections!: Collection[]

  @Output() searchcriteria = new EventEmitter<String>()

  searchPokemon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchThis() {
    this.searchcriteria.emit(this.searchPokemon)
  }

}
