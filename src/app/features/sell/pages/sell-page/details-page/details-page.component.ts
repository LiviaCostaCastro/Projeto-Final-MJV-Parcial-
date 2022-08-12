import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { produtos } from '../../../models/product.model';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  produtos?: produtos;

  constructor(
    private activedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
    const id = parseInt(params['productsId']);
    this.produtos = this.productsService.getById(id);
    console.log(this.produtos);
    });
  }

}
