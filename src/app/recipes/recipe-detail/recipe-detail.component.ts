import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { RecipeService } from '../recipe.service';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements  OnInit{
  recipe: Recipe
  id: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute ) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe((params)=> {
      this.id = +params["id"]
      this.recipe =this.recipeService.getRecipe(this.id)
    })
  }
}
