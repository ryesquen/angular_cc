import { NotificationChannel } from './notification.types';
import { NotificationFactory, NotificationSender } from './notification.factory';
import { SmsNotificationSender } from './sms-notification.sender';
import { EmailNotificationSender } from './email-notification.sender';
import { PushNotificationSender } from './push-notification.sender';

/**
 * Fase 3 — Implementación concreta de la Factory.
 * El mapa de canales → sender permite añadir uno nuevo (ej. WhatsApp)
 * sin modificar los consumidores (Open/Closed).
 */
export class SimpleNotificationFactory implements NotificationFactory {
  private readonly senders: Record<NotificationChannel, NotificationSender> = {
    sms: new SmsNotificationSender(),
    email: new EmailNotificationSender(),
    push: new PushNotificationSender(),
  };

  createSender(channel: NotificationChannel): NotificationSender {
    return this.senders[channel];
  }
}
