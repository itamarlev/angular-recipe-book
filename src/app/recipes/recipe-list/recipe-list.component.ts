import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Sticky noodles with homemade sauce', 'The sauce is made with Chinese five spice and apple cider', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/noodles.jpg?itok=Oalsb6ro'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Egg, Onion and Yogurt Curry', 'Egg, Onion and Yogurt Curry', 'https://s3.amazonaws.com/images.chefinyou.com/main/Egg-onion-yogurt-curry-recipe/main-img3.JPG'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Whole Wheat Pasta in Mushroom Sauce', 'A stunning whole wheat pasta laced with a mushroom ', 'https://i.ndtvimg.com/i/2016-03/pasta-salad_625x350_71459427282.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
