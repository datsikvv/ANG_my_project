import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.module';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList: Array<Product> = [];

  constructor(private productRepositoryService: ProductRepositoryService) { }

  ngOnInit() {
  }

  public get products(): Product[] {
    return this.productRepositoryService.getAllProducts(null);
  }

  public deleteProductById(id: number): void {
    this.productRepositoryService.deleteProductById(id);
  }
}
