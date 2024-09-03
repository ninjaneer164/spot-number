import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { initialParams, SpotNumberState } from '@core';
import { Store } from '@ngrx/store';
import { selecSpotNumberState, SpotNumberActions } from '../store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public digit0: string = '';
  public digit1: string = '';
  public isDebug: boolean = false;
  public number: string = '';
  public numbers: string[][] = [];
  public transposed: string = '';

  constructor(private store: Store) {
    this.store.dispatch(SpotNumberActions.generageNumbers({ params: initialParams }));

    this.store.select(selecSpotNumberState).pipe(takeUntilDestroyed()).subscribe((state: SpotNumberState) => {
      const { digit0, digit1, number, numbers, transposed } = state;
      this.digit0 = digit0;
      this.digit1 = digit1;
      this.number = number;
      this.numbers = numbers;
      this.transposed = transposed;
    });
  }
}
