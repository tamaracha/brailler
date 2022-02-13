import { Directive, Input, ElementRef, HostListener } from '@angular/core'
import type { OnInit, OnDestroy } from '@angular/core'
import type { SelectionRange } from './selection-range'
import { SelectionModel } from './selection-model'

@Directive({
  selector: '[appSelectionModel]'
})
export class SelectionModelDirective implements OnInit, OnDestroy {
  @Input('appSelectionModel') selectionModel: SelectionModel
  constructor(private el: ElementRef) {}
  ngOnInit() {
    const viewModel = this.selectionModel.getViewModel()
    if (viewModel) {
      this.setRange(viewModel)
    }
    this.selectionModel.registerOnChangesHandler(this.setRange)
  }

  @HostListener('keyup', ['$event'])
  onKeyup() {
    this.selectionModel.publishRange(this.getRange())
  }

  getRange(): SelectionRange {
    return {
      start: this.el.nativeElement.selectionStart,
      end: this.el.nativeElement.selectionEnd
    }
  }

  setRange(range: SelectionRange) {
    this.el.nativeElement.setSelectionRange(range.start, range.end)
  }

  ngOnDestroy() {
    if (this.selectionModel) {
      this.selectionModel.removeOnChangesHandler()
    }
  }
}
