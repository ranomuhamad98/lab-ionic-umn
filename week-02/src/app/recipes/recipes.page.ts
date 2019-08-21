import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})

export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }
  

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  getRecipe(recipeId:string){
    //console.log(this.recipes);
    console.log( {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    });
  }

  deleteRecipe(item){
    var i;
    for(i = 0; i < this.recipes.length; i++) {
      if(this.recipes[i].id == item){
        this.recipes.splice(i, 1);
      }

    }
  }
}
