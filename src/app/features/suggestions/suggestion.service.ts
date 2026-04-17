import { Injectable } from '@angular/core';

export interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  status: string;
  nbLikes: number;
}

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  addSuggestion(arg0: { title: any; description: any; category: any; }) {
      throw new Error('Method not implemented.');
  }
  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Améliorer la navigation',
      description: 'Ajouter une navigation plus claire sur l’interface.',
      category: 'Communication interne',
      date: new Date().toISOString().substring(0, 10),
      status: 'en attente',
      nbLikes: 0
    },
    {
      id: 2,
      title: 'Ajouter des filtres',
      description: 'Permettre de filtrer les suggestions par catégorie.',
      category: 'Technologie et services numériques',
      date: new Date().toISOString().substring(0, 10),
      status: 'en attente',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Optimiser le chargement',
      description: 'Utiliser le lazy loading pour réduire le temps de chargement initial.',
      category: 'Infrastructure et bâtiments',
      date: new Date().toISOString().substring(0, 10),
      status: 'en attente',
      nbLikes: 0
    }
  ];

  getAll() {
    return this.suggestions;
  }

  getById(id: number) {
    return this.suggestions.find(suggestion => suggestion.id === id);
  }
}