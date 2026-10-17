/**
 * Fase 3 — Puerto (Repository): el contrato de persistencia/entrega.
 * El dominio depende de esta interfaz, nunca de la implementación.
 */
import { Notification } from './notification.types';

export interface NotificationRepository {
  save(notification: Notification): Promise<void>;
}
