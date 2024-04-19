
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../servicios/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {
  producto: any = {};
  titulo: string='';
  botonTexto: string='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Estamos editando un producto existente
      this.titulo = 'Editar Producto';
      this.botonTexto = 'Actualizar';
      this.productService.getProducto(id).subscribe(data => {
        this.producto = data;
      });
    } else {
      // Estamos agregando un nuevo producto
      this.titulo = 'Agregar Nuevo Producto';
      this.botonTexto = 'Guardar';
    }
  }

  guardarProducto() {
    if (this.producto.id) {
      // Actualizar producto existente
      this.productService.actualizarProducto(this.producto).subscribe(() => {
        this.router.navigate(['/lista-productos']);
      });
    } else {
      // Agregar nuevo producto
      this.productService.agregarProducto(this.producto).subscribe(() => {
        this.router.navigate(['/lista-productos']);
      });
    }
  }
}


