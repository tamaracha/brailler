import { Component, OnDestroy } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'
import type { Subscription } from 'rxjs'
import { KeyConfigService } from '../key-config.service'

@Component({
  selector: 'app-keys-form',
  templateUrl: './keys-form.component.html',
  styleUrls: ['./keys-form.component.css']
})
export class KeysFormComponent implements OnDestroy {
  keysForm: UntypedFormGroup
  formSub: Subscription
  constructor(
    private fb: UntypedFormBuilder,
    private keyConfig: KeyConfigService
  ) {
    const keys = this.keyConfig.current
    const formConfig = {}
    Object.entries(keys).forEach(([key, value]) => {
      formConfig[key] = [value]
    })
    this.keysForm = this.fb.group(formConfig)
    this.formSub = this.keysForm.valueChanges.subscribe((value) =>
      this.keyConfig.update(value)
    )
  }

  ngOnDestroy(): void {
    this.formSub.unsubscribe()
  }
}
