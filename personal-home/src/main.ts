import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/home/components/app';

bootstrapApplication(App)
  .catch((err) => console.error(err));
