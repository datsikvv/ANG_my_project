import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/model/db.service';
import { Product } from 'src/app/model/product.module';
import { Observable } from 'rxjs';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public productList: Array<Product> = [];

  public categoryList = [];

  public currentCategory = null;

  //public productList$: Observable<Product[]>;

  constructor(private productRepositoryService: ProductRepositoryService) { }

  ngOnInit() {
    // this.dbService.getProducts().subscribe((products: Product[]) => {
    //   this.productList = products;
    // });

    // setTimeout( () => {
    //   this.productList = this.productRepositoryService.getAllProducts();
    //   console.log(this.productList);
    // }, 1000)
   
    
  }

  public get products(): Product[] {
    return this.productRepositoryService.getAllProducts(this.currentCategory);
  }

  public get categories(): string[] {
    return this.productRepositoryService.getCategories();
    //return this.cat
  }

  public filterProducts(category: string): void {
    console.log(category);
    this.currentCategory = category;
  }

  // public addToCart(product: Product): void {
  //   console.log(product)
  // }

  // public selecProduct() 

}
