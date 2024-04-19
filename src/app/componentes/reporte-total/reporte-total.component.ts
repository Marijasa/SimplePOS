import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VentaService } from '../../servicios/venta.service';

@Component({
  selector: 'app-reporte-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-total.component.html',
  styleUrl: './reporte-total.component.scss',
})
export class ReporteTotalComponent {
  ventas: any[] = [];
  ventasTotales = 0;
  ventasEfectivo = 0;
  ventasSinpe = 0;
  ventasProducto: any[] = []; 

  constructor(private ventaService: VentaService) {
    console.log('ReporteTotalComponent');
  }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventaService.getVentas().subscribe((ventas) => {
      this.ventas = ventas;

      // recorrer ventas y calcular total de ventas
      this.ventas.forEach((venta) => {

        const total = Number(venta.total);

        // guardar string como number
        this.ventasTotales += total;
        if (venta.id_tipo_pago == 1) {
          this.ventasEfectivo += total;
        } else {
          this.ventasSinpe += total;
        }

        // guardar total de ventas por producto
        venta.productos.forEach((producto: any) => {

          if(this.ventasProducto[producto.id_producto] !== undefined) {
            this.ventasProducto[producto.id_producto].total += total;

          } else {
            this.ventasProducto[producto.id_producto] = {
              nombre: producto.nombre,
              total: producto.precio * producto.cantidad,
            };
          }
        });
      });

      // eliminar campos vacíos en ventasProducto
      this.ventasProducto = this.ventasProducto.filter((producto) => producto !== undefined);
      console.log('ventasProducto', this.ventasProducto);
    });
  }
}
