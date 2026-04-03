import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { API_CONFIG, API_CONFIG_VALUE } from './usevalue/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient() ,
    {provide :API_CONFIG, useValue : API_CONFIG_VALUE}
  ]
};

