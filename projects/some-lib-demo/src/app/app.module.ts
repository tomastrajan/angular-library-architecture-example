import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureCModule } from '@my-org/some-lib/src/lib/feature-c';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureCModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
