import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card">
      <p>Valor: {{ value() }}</p>
      <button type="button" (click)="increment?.emit()">+1</button>
      <br>
      <button type="button" (click)="resetRequested.emit()">Reset</button>
    </section>
  `,
})
export class CounterCardComponent {
  readonly value = input.required<number>();
  readonly increment = output<void>();
  readonly resetRequested = output<void>();
}
