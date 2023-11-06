import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { Collection } from '../models/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  public collections: Collection[] = [];

  public collectionsFiltered: Collection[] = [];


  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getSets().subscribe(result => {
      result.data.forEach((data: { id: any; name: any; total: any; images: { logo: any; }; }) => {
        this.collections = [
          ...this.collections,
          {
            id: data.id,
            name: data.name,
            numberOfCards: data.total,
            logo: data.images.logo
          }
        ]
        this.collectionsFiltered = [...this.collections];
      });
    });

  }

  searchThis(data: any) {
    if (!data) {
      this.collectionsFiltered = this.collections;
    }

    this.collectionsFiltered = this.collections.filter(
      pokemon => pokemon?.name.toLowerCase().includes(data.toLowerCase())
    );
  }
}
