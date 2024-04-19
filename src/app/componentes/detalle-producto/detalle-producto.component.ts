import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../servicios/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducto(id).subscribe((data) => {
      this.producto = data;
      console.log('Producto:', this.producto);
    });
  }

  editarProducto() {
    this.router.navigate(['/productos', this.producto.id, 'editar']);
  }

  eliminarProducto() {
    this.productService.eliminarProducto(this.producto.id).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}
