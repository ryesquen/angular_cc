/**
 * Fase 3 — Singleton controlado.
 * `providedIn: 'root'` garantiza una única instancia por aplicación
 * (Singleton real). En pruebas se resetea manualmente.
 */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationSingleton {
  send(message: string): Promise<void> {
    // aquí iría la lógica real de envío
    console.log('NotificationSingleton.send', message);
    return Promise.resolve();
  }
}
