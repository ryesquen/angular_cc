/**
 * Fase 3 — Adaptador (Repository): implementación in-memory.
 * Es la versión con la que se prueban los casos de uso sin HTTP.
 */
import { NotificationRepository } from './notification.repository';
import { Notification } from './notification.types';

export class MemoryNotificationRepository implements NotificationRepository {
  async save(notification: Notification): Promise<void> {
    // en memoria: solo registramos el envío
    console.log(`[memory] enviar por ${notification.channel}: ${notification.message}`);
  }
}
