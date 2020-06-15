import { Directive, ElementRef } from '@angular/core'
// import { KeyConfigService } from './key-config.service'

@Directive({
  selector: 'input[appKeyInput]'
})
export class KeyInputDirective {
  constructor (private el: ElementRef, private keyConfig: KeyConfigService) { }
}
