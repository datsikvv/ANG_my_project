import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/model/db.service';
import { Product } from 'src/app/model/product.module';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public productList: Array<Product> = [];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
    
  }

  // public selecProduct() 

}
