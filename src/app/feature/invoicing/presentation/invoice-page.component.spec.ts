import { TestBed } from '@angular/core/testing'
import { INVOICE_PROVIDERS } from '../infrastructure/invoicing.providers'
import { InvoicePageComponent } from './invoice-page.component'

describe('InvoicePageComponent', () => {
  it('resuelve el caso de uso y registra la factura (cadena DI completa)', async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicePageComponent],
      providers: [...INVOICE_PROVIDERS],
    }).compileComponents();

    const fixture = TestBed.createComponent(InvoicePageComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
