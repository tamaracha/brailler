import { Directive, ElementRef, HostListener } from '@angular/core'
import { brailleChar } from './braille-dots.enum'
import { KeyConfigService } from './key-config.service'

@Directive({
  selector: 'textarea[appBraille], input[appBraille type=text]'
})
export class BrailleDirective {
  private keydowns: Set<string> = new Set()
  constructor (private el: ElementRef, private keyConfig: KeyConfigService) {}

  @HostListener('keydown', ['$event'])
  onKeydown (event: KeyboardEvent) {
    if (this.hasModifyers(event) || this.isControl(event) || this.isArrow(event)) { return }
    event.preventDefault()
    if (this.isBrailleKey(event)) {
      this.keydowns.add(event.key)
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyup (event: KeyboardEvent) {
    if (this.keydowns.has(event.key)) {
      const dots = this.keyConfig.dots(Array.from(this.keydowns))
      this.insert(brailleChar(dots))
      this.keydowns.delete(event.key)
      this.keydowns.clear()
    }
  }

  private insert (char: string) {
    const n = this.el.nativeElement
    n.setRangeText(char, n.selectionStart, n.selectionEnd, 'end')
    n.dispatchEvent(new Event('input'))
  }

  private isBrailleKey (event: KeyboardEvent) {
    return this.keyConfig.hasKey(event.key) && !this.hasModifyers(event)
  }

  private hasModifyers (event: KeyboardEvent): boolean {
    return event.metaKey || event.ctrlKey
  }

  private isArrow (event: KeyboardEvent) {
    return event.key.startsWith('Arrow')
  }

  private isControl (event: KeyboardEvent) {
    return event.key === 'Enter' || event.key === 'Backspace' ||
    event.key === 'Tab'
  }
}
