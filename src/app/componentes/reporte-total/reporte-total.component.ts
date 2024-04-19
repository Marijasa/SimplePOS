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
        console.log(venta);
        // guardar string como number
        this.ventasTotales += Number(venta.total);
        if (venta.id_tipo_pago == 1) {
          this.ventasEfectivo += Number(venta.total);
        } else {
          this.ventasSinpe += Number(venta.total);
        }
      });
    });
  }
}
