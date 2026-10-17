import { signal } from '@angular/core';

export class CounterStore {
  private _count = signal<number>(0);
  readonly count = this._count.asReadonly();

  increment() {
    this._count.update((v) => v + 1);
  }

  reset() {
    this._count.set(0);
  }
}
