import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is a test recipe", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ambitiouskitchen.com%2Fvegan-dinner-recipes%2F&psig=AOvVaw27FFPEMIuMhz7BSGDI0CEW&ust=1616449994277000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj4zNKvwu8CFQAAAAAdAAAAABAD")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
