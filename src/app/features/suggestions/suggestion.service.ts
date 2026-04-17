import { Injectable } from '@angular/core';

export interface Suggestion {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestions: Suggestion[] = [
    { id: 1, title: 'Améliorer la navigation', description: 'Ajouter une navigation plus claire sur l’interface.' },
    { id: 2, title: 'Ajouter des filtres', description: 'Permettre de filtrer les suggestions par catégorie.' },
    { id: 3, title: 'Optimiser le chargement', description: 'Utiliser le lazy loading pour réduire le temps de chargement initial.' }
  ];

  getAll() {
    return this.suggestions;
  }

  getById(id: number) {
    return this.suggestions.find(suggestion => suggestion.id === id);
  }
}