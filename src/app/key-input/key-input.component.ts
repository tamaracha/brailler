import { Component, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyInputComponent),
      multi: true
    }
  ],
  selector: 'app-key-input',
  templateUrl: './key-input.component.html',
  styleUrls: ['./key-input.component.css']
})
export class KeyInputComponent implements ControlValueAccessor {
  @Input() label = ''
  @Input() inputId: string
  key = ''
  disabled = false
  get value () {
    return this.key
  }

  private onChange: (string) => void = () => {}
  private onTouched: Function = () => {}
  setValue (value: string) {
    this.onTouched()
    this.key = value
    this.onChange(this.key)
  }

  writeValue (key: string) {
    this.key = key
  }

  registerOnChange (fn: (string) => void) {
    this.onChange = fn
  }

  registerOnTouched (fn: () => void) {
    this.onTouched = fn
  }

  setDisabledState (state: boolean) {
    this.disabled = state
  }
}
