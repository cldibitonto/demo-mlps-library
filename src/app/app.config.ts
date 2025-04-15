import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpBackend } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { provideDesignAngularKit } from 'design-angular-kit';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideDesignAngularKit({
      translateLoader: (itPrefix: string, itSuffix: string) => ({
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) =>
          new MultiTranslateHttpLoader(http, [
            { prefix: itPrefix, suffix: itSuffix }
          ]),
        deps: [HttpBackend],
      }),
    })
  ]
};
