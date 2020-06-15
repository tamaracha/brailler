import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'
import { KeysFormComponent } from './keys-form/keys-form.component'
import { BrailleDirective } from './braille.directive'
import { BrailleFormComponent } from './braille-form/braille-form.component'
import { KeyInputDirective } from './key-input.directive'
import { KeyPipe } from './key.pipe'

@NgModule({
  declarations: [
    AppComponent,
    KeysFormComponent,
    BrailleDirective,
    BrailleFormComponent,
    KeyInputDirective,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
