import { InjectionToken } from '@angular/core';
import { Invoice } from '../invoice';

export interface InvoiceRepository {
  save(invoice: Invoice): Promise<void>;
  findById(id: string): Promise<Invoice | null>;
}

export const INVOICE_REPOSITORY = new InjectionToken<InvoiceRepository>('InvoiceRepository');
