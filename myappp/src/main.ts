import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideBrowserGlobalErrorListeners } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),               // provide HttpClient globally
    provideRouter(routes),             // your routes
    provideBrowserGlobalErrorListeners()
  ]
}).catch(err => console.error(err));
/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));*/
/**What happens here?

Angular starts the app using:

App → root component

appConfig → global configuration

Meaning:

Create App component

Attach it to <app-root>

Apply configuration

Start change detection

Render UI

This replaces: */