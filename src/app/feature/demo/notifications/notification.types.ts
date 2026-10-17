/**
 * Fase 3 — Tipo compartido del dominio (canal de notificación).
 */
export type NotificationChannel = 'email' | 'sms' | 'push';

export interface Notification {
  id: string;
  channel: NotificationChannel;
  message: string;
}
