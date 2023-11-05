import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/Pokemon.model';

@Component({
  selector: 'app-display-collection',
  templateUrl: './display-collection.component.html',
  styleUrls: ['./display-collection.component.css']
})
export class DisplayCollectionComponent implements OnInit {

  public pokemonsBySet : Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      this.pokemonService.getCardsBySet(id).subscribe(result =>{
        result.data.forEach((data: { id: any; name: any; number: any; images: any; }) => {
          this.pokemonsBySet = [
          ...this.pokemonsBySet,
          {id:data.id,
          name:data.name,
          number:data.number,
          image:data.images.small}
          ]
        });
        console.log(this.pokemonsBySet);
      })
    })
  }

}
