import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { produtos } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Aproveite as Ofertas!"

  ProdutoAtivo = true;

  telefone = "85931698759";

  dataHoje = new Date();


  produtos: Array<produtos> = this.productsService.getprodutos();

  constructor(
    private productsService: ProductsService,
    private rounter: Router) { }

  ngOnInit(): void {
  }

  exibeProdutoSimNao() {
    this.ProdutoAtivo = !this.ProdutoAtivo;
  }

  detalhesProduto(idProduto: number) {
    this.rounter.navigateByUrl('product-details/${idProduto}');
  }
  comprar() {
    alert("Produto comprado com sucesso!");
  }
}
