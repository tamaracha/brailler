import { Component, OnInit, OnDestroy } from '@angular/core'
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import type { SelectionRange } from '../selection-range'
import { SelectionModel } from '../selection-model'

@Component({
  selector: 'app-braille-form',
  templateUrl: './braille-form.component.html',
  styleUrls: ['./braille-form.component.css']
})
export class BrailleFormComponent implements OnInit, OnDestroy {
  label = 'Enter Braille here'
  hint = 'Compose braille characters by simultaniously pressing the dot keys.'
  brailleForm = new UntypedFormGroup({
    text: new UntypedFormControl('')
  })

  selectionModel = new SelectionModel({ start: 0, end: 0 })
  values$ = this.brailleForm.valueChanges
    .pipe(debounceTime(150))
    .subscribe((value) => this.save(value.text))

  ranges$ = this.selectionModel
    .getValueChanges()
    .pipe(debounceTime(150))
    .subscribe((range) => this.saveSelection(range))

  ngOnInit(): void {
    this.load()
    this.loadSelection()
  }

  load() {
    this.brailleForm.setValue({
      text: window.localStorage.getItem('brailleText')
    })
  }

  save(value: string) {
    window.localStorage.setItem('brailleText', value)
  }

  loadSelection() {
    const range = JSON.parse(window.localStorage.getItem('selectionRange'))
    if (!range) {
      return
    }
    this.selectionModel.setRange(range)
  }

  saveSelection(range: SelectionRange) {
    window.localStorage.setItem('selectionRange', JSON.stringify(range))
  }

  ngOnDestroy() {
    this.values$.unsubscribe()
    this.ranges$.unsubscribe()
  }
}
