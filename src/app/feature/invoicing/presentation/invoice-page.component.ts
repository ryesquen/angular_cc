import { Component, inject, OnInit } from '@angular/core';
import { RegisterInvoiceUseCase } from '../application/register-invoice.use-case';

@Component({
  selector: 'app-invoice-page',
  template: ``,
})
export class InvoicePageComponent implements OnInit {
  private registerInvoiceUseCase = inject(RegisterInvoiceUseCase);

  async ngOnInit(): Promise<void> {
    for (let i = 1; i <= 20; i++) {
      await this.registerInvoiceUseCase.execute({
        id: `${i}`,
        total: Math.ceil(Math.random() * 100),
      });
    }
  }
}
