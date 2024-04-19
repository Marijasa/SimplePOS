import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servicios/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}
