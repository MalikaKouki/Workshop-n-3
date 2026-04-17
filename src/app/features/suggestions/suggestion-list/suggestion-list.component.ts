import { Component } from '@angular/core';
import { Suggestion, SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent {
  suggestions: Suggestion[];

  constructor(private suggestionService: SuggestionService) {
    this.suggestions = this.suggestionService.getAll();
  }
}