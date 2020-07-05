import { Directive, ElementRef, HostListener } from '@angular/core'
import { BrailleChar } from './braille-char'
import { KeyConfigService } from './key-config.service'

@Directive({
  selector: 'textarea[appBraille], input[appBraille type=text]'
})
export class BrailleDirective {
  #currentChar = new BrailleChar()
  #keydowns = new Set<string>()
  #inserted = false
  constructor (private el: ElementRef, private keyConfig: KeyConfigService) {}

  @HostListener('keydown', ['$event'])
  onKeydown (event: KeyboardEvent) {
    if (this.hasModifyers(event) || this.isControl(event) || this.isArrow(event)) { return }
    event.preventDefault()
    if (this.isBrailleKey(event)) {
      this.#currentChar.add(this.keyConfig.dot(event.key))
      this.#keydowns.add(event.key)
      this.#inserted = false
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyup (event: KeyboardEvent) {
    if (this.#keydowns.has(event.key)) {
      if (!this.#inserted) {
        this.insert(this.#currentChar.toString())
        this.#inserted = true
      }
      this.#currentChar.remove(this.keyConfig.dot(event.key))
      this.#keydowns.delete(event.key)
      // this.#currentChar.clear()
      // this.#keydowns.clear()
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
