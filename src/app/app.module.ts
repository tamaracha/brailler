import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'
import { KeysFormComponent } from './keys-form/keys-form.component'
import { BrailleDirective } from './braille.directive'
import { BrailleFormComponent } from './braille-form/braille-form.component'
import { KeyInputDirective } from './key-input.directive'
import { KeyPipe } from './key.pipe'
import { SelectionModelDirective } from './selection-model.directive'

@NgModule({
  declarations: [
    AppComponent,
    KeysFormComponent,
    BrailleDirective,
    BrailleFormComponent,
    KeyInputDirective,
    KeyPipe,
    SelectionModelDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
