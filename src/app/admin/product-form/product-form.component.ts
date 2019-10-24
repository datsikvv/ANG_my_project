import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.module';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public form: FormGroup;
  public name: FormControl;
  public category: FormControl;
  public description: FormControl;
  public price: FormControl;



  constructor(
    private repository: ProductRepositoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    const mode = this.activatedRoute.snapshot.params['mode'];
    let product = new Product('', '', '', 0);

    if (mode === 'edit') {
      console.log(mode);
      const id = +this.activatedRoute.snapshot.params['id'];
      product = this.repository.getProductById(id);
      console.log(product);
    }

    this.name = new FormControl(product.name, Validators.required);
    this.category = new FormControl(product.category, Validators.required);
    this.description = new FormControl(product.description, Validators.required);
    this.price = new FormControl(product.price, [Validators.required, Validators.min(1)]);
    this.form = new FormGroup( {
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price
    });
  }


  public save(): void {
    if (this.form.valid) {
     this.repository.createProduct(this.form.value);
     this.router.navigate( ['/admin/products'] )
    }
  }

}
