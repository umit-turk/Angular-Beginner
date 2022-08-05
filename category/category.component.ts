import { CategoryService } from './../services/category.service';
import { CategoryRepository } from './../models/category.repository';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: Category[] = [];
  selectedCategory: Category | any = null;
  displayAll: boolean = true;

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.listCategories()
  }

  listCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res
    })
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
