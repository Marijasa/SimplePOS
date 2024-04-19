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
    this.updateProducts();
  }

  updateProducts(): void {
    this.productService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  eliminarProducto(id: string) {
    this.productService.eliminarProducto(id).subscribe(() => {
      this.updateProducts();
    });
  }

  cambiarProducto(producto: any) {
    producto.activo = (producto.activo == 1) ? 0 : 1;
    this.productService.actualizarProducto(producto).subscribe(() => {
      this.updateProducts();
    });
  }

}
