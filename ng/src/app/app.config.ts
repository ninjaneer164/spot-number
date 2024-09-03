import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { spotNumberReducer } from '../store';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      'spotNumber': spotNumberReducer
    }),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: 'en',
    }))
  ]
};
