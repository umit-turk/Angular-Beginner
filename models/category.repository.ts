import { Category } from './category';
export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {id:1,name:"Macera"},
      {id:2,name:"Komedi"},
      {id:3,name:"Romantik"},
      {id:4,name:"Bilim Kurgu"},
    ]
  }

  getCategories(): Category[]{
    return this.categories;
  }

  getByCategoryId(id: number): Category | undefined{
    return this.categories.find(i => i.id == id)
  }

}
