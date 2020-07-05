import { Component, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import type { Subscription } from 'rxjs'
import { KeyConfigService } from '../key-config.service'

@Component({
  selector: 'app-keys-form',
  templateUrl: './keys-form.component.html',
  styleUrls: ['./keys-form.component.css']
})
export class KeysFormComponent implements OnDestroy {
  keysForm: FormGroup
  formSub: Subscription
  constructor (private fb: FormBuilder, private keyConfig: KeyConfigService) {
    const keys = this.keyConfig.current
    const formConfig = {}
    Object.entries(keys).forEach(([key, value]) => { formConfig[key] = [value] })
    this.keysForm = this.fb.group(formConfig)
    this.formSub = this.keysForm.valueChanges
      .subscribe(value => this.keyConfig.update(value))
  }

  ngOnDestroy (): void {
    this.formSub.unsubscribe()
  }
}
