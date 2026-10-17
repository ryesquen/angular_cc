import { NotificationSender } from './notification.factory';

/**
 * Fase 3 — Adaptador de envío por email.
 */
export class EmailNotificationSender implements NotificationSender {
  async send(message: string): Promise<void> {
    console.log(`[email] ${message}`);
  }
}
