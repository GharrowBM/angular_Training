import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test A', 'Testing recipe', 'https://file1.topsante.com/var/topsante/storage/images/1/3/1/3/1313960/la-nourriture-des-fast-food-modifie-nos-genes.jpg?alias=exact1024x768_l')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
