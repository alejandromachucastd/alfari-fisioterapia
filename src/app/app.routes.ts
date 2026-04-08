import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/services/services.component').then((m) => m.ServicesComponent)
  },
  {
    path: 'servicios/:slug',
    loadComponent: () =>
      import('./features/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent
      )
  },
  {
    path: 'convenios',
    loadComponent: () =>
      import('./features/convenios/convenios.component').then((m) => m.ConveniosComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
