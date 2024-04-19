// formulario-venta.component.ts y editar-venta.component.ts son iguales
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VentaService } from '../../servicios/venta.service';
import { ProductService } from '../../servicios/product.service';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-formulario-venta',
  standalone: true,
  imports: [FormsModule, CommonModule, TicketComponent, RouterLink],
  templateUrl: './formulario-venta.component.html',
  styleUrls: ['./formulario-venta.component.scss'],
})
export class FormularioVentaComponent implements OnInit {
  venta: any = {
    id: 0,
    fecha: new Date(),
    cliente: '',
    id_tipo_pago: 1,
    productos: [],
    total: 0,
    pagaCon: 0,
    vuelto: 0,
  };
  ventaPrint: any = {};
  productos: any[] = []; // Si necesitas cargar los productos
  titulo: string = '';
  botonTexto: string = '';

  @ViewChild('ticket') ticket?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ventaService: VentaService,
    private productService: ProductService
  ) {
    productService.getProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  ngOnInit(): void {
    console.log('FormularioProductoComponent ngOnInit');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Estamos editando un producto existente
      this.titulo = 'Editar venta';
      this.botonTexto = 'Actualizar';
      this.productService.getProducto(id).subscribe((data) => {
        this.venta = data;
      });
    } else {
      // Estamos agregando un nuevo producto
      this.titulo = 'Agregar Nueva venta';
      this.botonTexto = 'Guardar';
    }
  }

  guardarVenta(): void {
    if (this.venta.cliente === '') {
      this.venta.cliente = 'Cliente Anónimo';
    }
    this.ventaService.crearVenta(this.venta).subscribe((data) => {
      // Navegar a la lista de ventas después de guardar la venta
      //this.router.navigate(['/ventas']);
      this.venta.id = data.id;
      // this.ventaPrint = JSON.parse(JSON.stringify(this.venta));
      this.ventaPrint = { ...this.venta };

      // wait 1 segundo
      setTimeout(() => {
        this.imprimirTicket();
        this.limpiarVenta();
      }, 1000);
    });
  }

  imprimirTicket(): void {
    const contenidoTicket = this.ticket?.nativeElement.innerHTML;
    const ventanaImpresion = window.open('', '_blank', 'width=1400,height=600');
    // const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion?.document.write(contenidoTicket);
    ventanaImpresion?.document.close();
    ventanaImpresion?.print();
  }

  agregarProducto(id: number): void {
    this.productos[id].cantidad = (this.productos[id].cantidad || 0) + 1;

    const existe = this.venta.productos.filter(
      (producto: any) => producto.id == this.productos[id].id
    );
    if (existe.length === 0) {
      this.venta.productos.push(this.productos[id]);
    } else {
      existe.cantidad = this.productos[id].cantidad;
    }
    this.recalcularTotal();
  }

  quitarProducto(id: number): void {
    if (!this.productos[id].cantidad || 0) {
      return;
    }

    this.productos[id].cantidad = (this.productos[id].cantidad || 0) - 1;

    const existe = this.venta.productos.filter(
      (producto: any) => producto.id == this.productos[id].id
    );
    existe.cantidad = this.productos[id].cantidad;
    if (this.productos[id].cantidad === 0) {
      this.venta.productos = this.venta.productos.filter(
        (producto: any) => producto.id !== this.productos[id].id
      );
    }
    this.recalcularTotal();
  }

  recalcularTotal(): void {
    this.venta.total = this.venta.productos.reduce(
      (total: number, producto: any) =>
        total + producto.precio * producto.cantidad,
      0
    );
    this.venta.pagaCon = this.venta.total;
  }

  calcularVuelto(): void {
    this.venta.vuelto = this.venta.pagaCon - this.venta.total;
  }

  limpiarVenta() {
    this.venta = {
      id: 0,
      fecha: new Date(),
      cliente: '',
      id_tipo_pago: 1,
      productos: [],
      total: 0,
      pagaCon: 0,
      vuelto: 0,
    };
    this.ventaPrint = {};
  }
}
