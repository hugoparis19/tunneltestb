import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BusinessUnit } from "environments/business-units";

if (environment.production) {
  enableProdMode();
}

// if(environment.businessUnit === BusinessUnit.Es ){
//   platformBrowserDynamic().bootstrapModule(AppModuleEs);
// }
// else
// {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// }

platformBrowserDynamic().bootstrapModule(AppModule);
