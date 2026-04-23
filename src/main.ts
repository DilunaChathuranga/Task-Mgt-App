import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
// when we bootstrapApplication like this angular know this is standalone app (component based approach) , even if we dosen't set the standalone :true in the component
