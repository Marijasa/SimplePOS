// venta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  private apiUrl = environment.server_url + 'ventas.php';

  constructor(private http: HttpClient) {}

  // Obtener todas las ventas
  getVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener los detalles de una venta por ID
  getVentaById(id: string): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<any>(url);
  }

  // Crear una nueva venta
  crearVenta(venta: any): Observable<any> {
    const headers = {
      headers: { 'Content-Type': 'application/json' },
    };
    return this.http.post(this.apiUrl, venta, headers);
  }

  // Actualizar una venta existente
  actualizarVenta(venta: any): Observable<any> {
    const url = `${this.apiUrl}/${venta.id}`;
    return this.http.put<any>(url, venta);
  }

  // Eliminar una venta existente
  eliminarVenta(id: string): Observable<void> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete<void>(url);
  }
}
