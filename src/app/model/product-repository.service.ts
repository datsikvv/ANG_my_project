import { Injectable } from '@angular/core';
import { Product } from './product.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  productList: Product[];
  categoryList: string[];

  constructor(private dbService: DbService) { 
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
      this.categoryList = this.productList.map(p => {
        return p.category;
      }).filter((c, index, array) => array.indexOf(c) == index).sort();
    })
  }


  
  public getAllProducts(category: string | null): Product[] {
   return this.productList.filter((p) => {
     return category === null || p.category === category;
   });
  }

  public getCategories(): string[] {
    return this.categoryList;
   }


  public getProductById(id: number): Product {
    return this.productList.find( (p) => {
      return p.id === id;
    })
  }

  public deleteProductById(id: number) {
    this.dbService.deleteProductById(id).subscribe(() => {});
  }
     

}
