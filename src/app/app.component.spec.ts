/* eslint-env jasmine */
import { TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { AppComponent } from './app.component'
import { KeyConfigService } from './key-config.service'
import { KeysFormComponent } from './keys-form/keys-form.component'
import { KeyInputComponent } from './key-input/key-input.component'
import { BrailleFormComponent } from './braille-form/braille-form.component'
import { BrailleDirective } from './braille.directive'
import { SelectionModelDirective } from './selection-model.directive'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatInputModule],
      providers: [KeyConfigService],
      declarations: [
        AppComponent,
        KeysFormComponent,
        KeyInputComponent,
        BrailleFormComponent,
        BrailleDirective,
        SelectionModelDirective
      ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title \'brailler\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Brailler')
  })
})
