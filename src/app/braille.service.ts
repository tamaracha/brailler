import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { EventManager } from '@angular/platform-browser'
import type { Observable, Subscription } from 'rxjs'
import { fromEventPattern } from 'rxjs'
import { buffer, filter, map, tap } from 'rxjs/operators'

const offset = 10240
const braille_dots = ['a', 'e', 'i', 't', 'r', 'n', 'h', 's']
const braille_keys = [ ...braille_dots, ' ' ]

@Injectable({
  providedIn: 'root'
})
export class BrailleService {

  constructor (
    private eventManager: EventManager,
    @Inject(DOCUMENT) private document: HTMLElement
  ) {
  }
  public brailleEvents (element: HTMLElement, dots: string[]) {
    const ups$ = this.keyboardEvents('keyup', element).pipe(
      filter(e => [...dots, ' '].includes(e.key) && !this.hasModifyers(e)),
      tap(e => e.preventDefault())
    )
    const downs$ = this.keyboardEvents('keydown', element).pipe(
      filter(e => [...dots, ' '].includes(e.key) && !this.hasModifyers(e)),
      tap(e => e.preventDefault())
    )
    return downs$.pipe(
      buffer(ups$),
      filter(buf => buf.length !== 0),
      map(buf => this.brailleChar(buf, dots))
    )
  }
  private keyboardEvents (event: string, element: HTMLElement): Observable<KeyboardEvent> {
    return fromEventPattern<KeyboardEvent>(
          handler => this.eventManager.addEventListener(element, event, handler),
          (handler, dispose) => dispose()
        )
  }
  isBraille (key: string) {
    return braille_keys.includes(key)
  }
  hasModifyers (e: KeyboardEvent) {
    return !!e.metaKey || !!e.shiftKey || !!e.altKey || !!e.ctrlKey
  }
  brailleChar(from: KeyboardEvent[], dots: string[]) {
    const scalar = from
    .map(e => dots.indexOf(e.key))
    .reduce((ac, i) => {
      if (i === -1) { return offset }
      return ac + (1 << i)
    }, offset)
    return String.fromCharCode(scalar)
  }
}
