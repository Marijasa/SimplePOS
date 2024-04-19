import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VentaService } from '../../servicios/venta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-venta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.scss'],
})
export class DetalleVentaComponent implements OnInit {
  venta: any;
  productosVendidos: any[] = []; // Si necesitas mostrar los productos vendidos

  constructor(
    private route: ActivatedRoute,
    private ventaService: VentaService
  ) {}

  ngOnInit(): void {
    this.obtenerDetalleVenta();
  }

  obtenerDetalleVenta(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.ventaService.getVentaById(id).subscribe((venta) => {
      this.venta = venta;
      console.log(this.venta);
      // Si necesitas cargar los productos vendidos
      // this.obtenerProductosVendidos(id);
    });
  }

  // Método para obtener los productos vendidos en la venta
  // obtenerProductosVendidos(idVenta: number): void {
  //   // Lógica para obtener los productos vendidos desde el servicio
  //   this.ventaService.getProductosVendidos(idVenta)
  //     .subscribe(productos => {
  //       this.productosVendidos = productos;
  //     });
  // }
}
