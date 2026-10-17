import { Invoice } from './invoice';

export class InvoiceValidator {
  validate(invoice: Invoice): string | null {
    if (!invoice.id.trim()) {
      return 'id es obligatorio.';
    }
    if (invoice.total <= 0) {
      return 'El total debe ser un valor positivo.';
    }
    return null;
  }
}
