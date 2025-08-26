import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,   // merge your existing config
  providers: [
    ...(appConfig.providers || []),  // keep existing providers
    provideHttpClient()              // ✅ registers HttpClient correctly
  ]
}).catch((err) => console.error(err));
