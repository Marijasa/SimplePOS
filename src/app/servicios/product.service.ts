import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.server_url + 'productos.php';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProducto(id: string): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<any>(url);
  }

  agregarProducto(producto: any): Observable<any> {
    const headers = {
      headers: { 'Content-Type': 'application/json' },
    };
    return this.http.post(this.apiUrl, producto, headers);
  }

  actualizarProducto(producto: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put<any>(url, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete<any>(url);
  }
}
