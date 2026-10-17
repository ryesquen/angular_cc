import { vi } from 'vitest';
import { SimpleNotificationFactory } from './simple-notification.factory';

describe('NotificationFactory', () => {
  it('envía un SMS con el texto indicado', async () => {
    const factory = new SimpleNotificationFactory();
    const sender = factory.createSender('sms');
    const logSpy = vi.spyOn(console, 'log');

    await sender.send('acá va el sms');

    expect(logSpy).toHaveBeenCalledWith('[sms] acá va el sms');
    logSpy.mockRestore();
  });
});
