import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://img-global.cpcdn.com/003_recipes/bd2e55f663e049ef/751x532cq70/gado-gado-siram-surabaya-foto-resep-utama.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap'],
    },
    {
      id: 'r2',
      title: 'Ketupat Sayur',
      imageUrl: 'https://i.pinimg.com/originals/6a/31/00/6a3100e7d1069e5f19dd74c1d78b20ba.jpg',
      ingredients: ['Telor', 'Buah Labu Siam', 'Buah tahu cokelat/goreng'],
    },
    {
      id: 'r3',
      title: 'Nasi Kuning',
      imageUrl: 'https://selerasa.com/wp-content/uploads/2017/02/Resep-sego-kuning-banyuwangi.jpg',
      ingredients: ['Beras', 'Daun Salam', 'Santan', 'Serai', 'Air secukupnya'],
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
}
