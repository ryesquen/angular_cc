/**
 * Fase 4 — Caso de uso (capa application).
 * Orquesta: valida y persiste. No conoce HTTP, ni Angular, ni la BD.
 */
import { Invoice } from '../domain/invoice';
import { InvoiceValidator } from '../domain/invoice.validator';
import { InvoiceRepository } from '../domain/ports/invoice.repository';

export class RegisterInvoiceUseCase {
  constructor(
    private readonly repository: InvoiceRepository,
    private readonly validator: InvoiceValidator,
  ) {}

  async execute(invoice: Invoice): Promise<void> {
    const error = this.validator.validate(invoice);
    if (error) {
      throw new Error(error);
    }
    await this.repository.save(invoice);
  }
}
