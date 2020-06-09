import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list'

import { AppComponent } from './app.component';
import { KeysFormComponent } from './keys-form/keys-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    KeysFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
