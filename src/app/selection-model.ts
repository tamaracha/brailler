import { Subject } from 'rxjs'
import type { SelectionRange } from './selection-range'

export type SelectionHandler = (range: SelectionRange) => void

export class SelectionModel {
  private viewModel: SelectionRange
  private valueChanges = new Subject<SelectionRange>()
  private selectionHandler: SelectionHandler = () => {}
  constructor (initialRange: SelectionRange) {
    this.viewModel = initialRange
  }

  getViewModel () {
    return this.viewModel
  }

  getValueChanges () {
    return this.valueChanges.asObservable()
  }

  publishRange (range: SelectionRange) {
    if (this.isDistinct(this.viewModel, range)) {
      this.viewModel = range
      this.valueChanges.next(this.viewModel)
    }
  }

  setRange (range: SelectionRange) {
    this.selectionHandler(range)
    this.viewModel = range
  }

  registerOnChangesHandler (handler: SelectionHandler) {
    this.selectionHandler = handler
  }

  removeOnChangesHandler () {
    this.selectionHandler = () => {}
  }

  private isDistinct (oldRange: SelectionRange, newRange: SelectionRange): boolean {
    return oldRange.start !== newRange.start || oldRange.end !== newRange.end
  }
}
