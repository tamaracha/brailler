import { Component, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const keys: { name: string, value: string }[] = [
  { name: '🄰', value: 'a' },
  { name: '🄱', value: 'b' }
]

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
    const key = keys.find(k => k.value === this.key)
    return key ? key.name : this.key
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
