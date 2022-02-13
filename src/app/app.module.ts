import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'
import { KeysFormComponent } from './keys-form/keys-form.component'
import { BrailleDirective } from './braille.directive'
import { BrailleFormComponent } from './braille-form/braille-form.component'
import { SelectionModelDirective } from './selection-model.directive'
import { KeyInputComponent } from './key-input/key-input.component'

@NgModule({
  declarations: [
    AppComponent,
    KeysFormComponent,
    BrailleDirective,
    BrailleFormComponent,
    SelectionModelDirective,
    KeyInputComponent
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
export class AppModule {}
