import { Provider } from '@angular/core'
import { RegisterInvoiceUseCase } from '@feature/invoicing/application/register-invoice.use-case'
import { InvoiceValidator } from '@feature/invoicing/domain/invoice.validator'
import {
  INVOICE_REPOSITORY,
  InvoiceRepository,
} from '@feature/invoicing/domain/ports/invoice.repository'
import { MemoryInvoiceRepository } from '@feature/invoicing/infrastructure/memory-invoice.repository'

/**
 * Fase 4 — Composition root del feature `invoicing`.
 * Único lugar que conoce el puerto + el adaptador + el caso de uso.
 * Para pasar a HTTP/BD: cambia solo `useClass`.
 */
export const INVOICE_PROVIDERS: Provider[] = [
  { provide: INVOICE_REPOSITORY, useClass: MemoryInvoiceRepository }, // InvoiceRepository
  { provide: InvoiceValidator, useClass: InvoiceValidator }, // InvoiceValidator
  {
    provide: RegisterInvoiceUseCase,
    useFactory: (repository: InvoiceRepository, validator: InvoiceValidator) =>
      new RegisterInvoiceUseCase(repository, validator),
    deps: [INVOICE_REPOSITORY, InvoiceValidator],
  },
];
