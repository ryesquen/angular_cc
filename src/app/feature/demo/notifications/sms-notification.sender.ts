import { NotificationSender } from './notification.factory';

/**
 * Fase 3 — Adaptador de envío por SMS.
 */
export class SmsNotificationSender implements NotificationSender {
  async send(message: string): Promise<void> {
    console.log(`[sms] ${message}`);
  }
}
