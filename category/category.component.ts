import { CategoryRepository } from './../models/category.repository';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: Category[];
  categoryRepository:CategoryRepository
  selectedCategory: Category | any = null;
  displayAll: boolean = true;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories()
  }

  ngOnInit(): void {
  }


  selectCategory(item?: Category){
    if(item) {
      this.selectedCategory = item;
      this.displayAll = false;
    }else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

}
