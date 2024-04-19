import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../servicios/product.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducto(id).subscribe(data => {
      this.producto = data;
    });
  }

  editarProducto() {
    // Implementa la lógica para editar el producto
  }

  eliminarProducto() {
    // Implementa la lógica para eliminar el producto
  }
}
