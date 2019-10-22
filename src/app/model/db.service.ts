import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.module'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  product: Product;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
   return  this.http.get<Product[]>('http://localhost:3000/products');
  }

  public deleteProductById(id: number): Observable<any> {
    return this.http.delete<Product[]>('http://localhost:3000/products/' + id);
   }
}

