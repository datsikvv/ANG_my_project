import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private currentCategory = null;

  constructor(public productRepositoryService: ProductRepositoryService) { }

  public get categories(): string[] {
    return this.productRepositoryService.getCategories();
  };

  public changeCategory(c: string): void {
    this.currentCategory = c;
  }

  ngOnInit() {
  }

}
