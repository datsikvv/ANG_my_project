import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private currentCategory = null;

  constructor(
    public productRepositoryService: ProductRepositoryService,
    private loginService: LoginService,
    private router: Router
    ) { }

  public get categories(): string[] {
    return this.productRepositoryService.getCategories();
  };

  public changeCategory(c: string): void {
    this.currentCategory = c;
  }

  public logout(): void {
    this.loginService.logout()
    this.router.navigate(['/store'])
  }
 
  ngOnInit() {
  }

}
