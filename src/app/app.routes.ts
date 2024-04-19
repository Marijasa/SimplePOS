import { Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './componentes/formulario-producto/formulario-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ListaVentasComponent } from './componentes/lista-ventas/lista-ventas.component';
import { DetalleVentaComponent } from './componentes/detalle-venta/detalle-venta.component';
import { FormularioVentaComponent } from './componentes/formulario-venta/formulario-venta.component';


export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/nuevo', component: FormularioProductoComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'productos/:id/editar', component: FormularioProductoComponent },
  { path: 'ventas', component: ListaVentasComponent },
  { path: 'ventas/nuevo', component: FormularioVentaComponent },
  { path: 'ventas/:id', component: DetalleVentaComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  // Agrega aquí otras rutas si es necesario
];
