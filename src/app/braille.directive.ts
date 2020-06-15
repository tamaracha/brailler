import { Directive, ElementRef, HostListener } from '@angular/core'
import { brailleChar } from './braille-dots.enum'
import { KeyConfigService } from './key-config.service'

@Directive({
  selector: 'textarea[appBraille], input[appBraille type=text]'
})
export class BrailleDirective {
  private keydowns: Set<string> = new Set()
  constructor (private el: ElementRef, private keyConfig: KeyConfigService) { }
  @HostListener('keydown', ['$event'])
  onKeydown (event: KeyboardEvent) {
    if (this.hasModifyers(event)) { return }
    if (this.isBrailleKey(event)) {
      event.preventDefault()
      this.keydowns.add(event.key)
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyup (event: KeyboardEvent) {
    if (this.keydowns.has(event.key)) {
      const dots = this.keyConfig.dots(Array.from(this.keydowns))
      this.insert(brailleChar(dots))
      this.keydowns.clear()
    }
  }

  private insert (char: string) {
    const n = this.el.nativeElement
    const startPos = n.selectionStart
    n.value = [
      n.value.substring(0, startPos),
      char,
      n.value.substring(n.selectionEnd)
    ].join('')
    n.selectionStart = startPos + char.length
    n.selectionEnd = startPos + char.length
  }

  private isBrailleKey (event: KeyboardEvent) {
    return this.keyConfig.hasKey(event.key) && !this.hasModifyers(event)
  }

  private hasModifyers (event: KeyboardEvent): boolean {
    return event.metaKey || event.ctrlKey
  }
}
