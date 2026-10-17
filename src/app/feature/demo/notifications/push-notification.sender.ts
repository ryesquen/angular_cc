import { NotificationSender } from './notification.factory';

/**
 * Fase 3 — Adaptador de envío por push.
 */
export class PushNotificationSender implements NotificationSender {
  async send(message: string): Promise<void> {
    console.log(`[push] ${message}`);
  }
}
