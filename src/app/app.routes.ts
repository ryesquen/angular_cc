import { Routes } from '@angular/router';
import { INVOICE_PROVIDERS } from '@feature/invoicing/infrastructure/invoicing.providers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('@feature/demo/demo-page.component').then((m) => m.DemoPageComponent),
  },
  {
    path: 'invoice',
    loadComponent: () =>
      import('@feature/invoicing/presentation/invoice-page.component').then(
        (m) => m.InvoicePageComponent,
      ),
    providers: INVOICE_PROVIDERS,
  },
];
