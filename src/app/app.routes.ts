import { Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';

export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/nuevo', component: FormularioProductoComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'productos/:id/editar', component: FormularioProductoComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', redirectTo: '/productos' } // Manejo de rutas no encontradas
  // Agrega aquí otras rutas si es necesario
];
