/**
 * Fase 3 — Factory: elige el envío según la configuración.
 * Centraliza la creación (Open/Closed) sin `if` dentro de los casos de uso.
 */
import { NotificationChannel } from './notification.types';

export interface NotificationSender {
  send(message: string): Promise<void>;
}

export interface NotificationFactory {
  createSender(channel: NotificationChannel): NotificationSender;
}
