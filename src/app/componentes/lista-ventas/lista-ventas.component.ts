// lista-ventas.component.ts
import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../servicios/venta.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-ventas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.scss'],
})
export class ListaVentasComponent implements OnInit {
  ventas: any[] = [];

  constructor(private ventaService: VentaService, private router: Router) {
    console.log('ListaVentasComponent');
  }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  nuevaVenta(): void {
    this.router.navigate(['/ventas/nuevo']);
  }

  obtenerVentas(): void {
    this.ventaService.getVentas().subscribe((ventas) => {
      this.ventas = ventas;
    });
  }

  // Método para eliminar una venta
  eliminarVenta(id: string): void {
    this.ventaService.eliminarVenta(id).subscribe(() => {
      // Eliminar la venta de la lista después de la confirmación del servidor
      this.obtenerVentas();
    });
  }
}
