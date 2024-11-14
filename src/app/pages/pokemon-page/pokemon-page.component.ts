import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {

private _pokemonService = inject(PokemonService);

cards$ = this._pokemonService.getAllCards$();

ngOnInit() {
  this.cards$.subscribe({
    next: (data) => console.log('Data reçue:', data),
    error: (err) => console.error('Erreur lors de la récupération des cartes:', err)
  });
}

trackByIndex(index: number): number {
  return index;
}

}
