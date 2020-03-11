import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatNumberPipe } from './format-number.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EseriesPipe } from './eseries.pipe';

@NgModule({
  declarations: [AppComponent, FormatNumberPipe, EseriesPipe],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
