import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Honey Sriracha Tofu',
      'Sweet & Spicy',
      'https://www.budgetbytes.com/wp-content/uploads/2021/09/Honey-Sriracha-Tofu-close.jpg',
      [new Ingredient('Bread', 12), new Ingredient('Olives', 5)]
    ),
    new Recipe(
      'Lemon Chili Quorn',
      'Veg Pasta',
      'https://images.ctfassets.net/uexfe9h31g3m/1Md7TQLrH8xGQacMI63nil/fc0a152287cdb953099393d261ea9d2a/Linguine_1024x768.jpg?w=768&h=512&fm=webp&fit=thumb&q=100',
      [new Ingredient('salt', 12), new Ingredient('Pepper', 5)]
    ),
  ];
  public recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
