import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterCardComponent } from './counter-card.component';
import { CounterStore } from './counter.store';

//crea estrucutura base paga DemoPageComponent
@Component({
  selector: 'app-demo-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CounterCardComponent],
  providers: [CounterStore],
  template: `
    <h1>Demo Counter</h1>
    <app-counter-card
      [value]="store.count()"
      (increment)="store.increment()"
      (reset)="store.reset()"
    />
  `,
})
export class DemoPageComponent {
  readonly store = new CounterStore();
}
