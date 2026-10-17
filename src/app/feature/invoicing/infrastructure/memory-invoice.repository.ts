/**
 * Fase 4 — Adaptador (capa infrastructure).
 * Implementa el puerto `InvoiceRepository` con memoria; en producción
 * se sustituye por uno HTTP/BD sin tocar dominio ni aplicación.
 */
import { Invoice } from '../domain/invoice';
import { InvoiceRepository } from '../domain/ports/invoice.repository';

export class MemoryInvoiceRepository implements InvoiceRepository {
  private readonly invoices = new Map<string, Invoice>();

  async save(invoice: Invoice): Promise<void> {
    this.invoices.set(invoice.id, invoice);
    console.log('Invoice saved in memory:', invoice);
  }

  async findById(id: string): Promise<Invoice | null> {
    return this.invoices.get(id) ?? null;
  }
}
