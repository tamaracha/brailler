import { Injectable } from '@angular/core'
import { BrailleChar } from './braille-char'

interface KeyMap {
  empty: string
  dot1: string
  dot2: string
  dot3: string
  dot4: string
  dot5: string
  dot6: string
  dot7: string
  dot8: string
}

@Injectable({
  providedIn: 'root'
})
export class KeyConfigService {
  #current: KeyMap = KeyConfigService.quertzMap()
  #reverseMap = new Map<string, BrailleChar>()
  static quertzMap (): KeyMap {
    return {
      empty: ' ',
      dot1: 'f',
      dot2: 'd',
      dot3: 's',
      dot4: 'j',
      dot5: 'k',
      dot6: 'l',
      dot7: 'a',
      dot8: 'ö'
    }
  }

  constructor () {
    const map = this.load() || KeyConfigService.quertzMap()
    this.update(map)
  }

  get current () {
    return this.#current
  }

  load (): KeyMap {
    const defaultMap = KeyConfigService.quertzMap()
    const parsed = JSON.parse(window.localStorage.getItem('key_config'))
    if (!parsed) { return defaultMap }
    const keys = Object.keys(defaultMap)
    keys.forEach(k => {
      const value = parsed[k]
      if (typeof value === 'string') { defaultMap[k] = value }
    })
    return defaultMap
  }

  save () {
    const json = JSON.stringify(this.current)
    window.localStorage.setItem('key_config', json)
  }

  update (map: KeyMap) {
    Object.assign(this.#current, map)
    this.updateReverseMap()
    this.save()
  }

  updateReverseMap () {
    this.#reverseMap.clear()
    Object.entries(this.#current)
      .forEach(([k, v]) => this.#reverseMap.set(v, BrailleChar[k]))
  }

  set (dot: string, key: string) {
    this.#reverseMap.delete(this.current[dot])
    this.current[dot] = key
    this.#reverseMap.set(key, BrailleChar[dot])
  }

  hasKey (key: string) {
    return this.#reverseMap.has(key)
  }

  dot (key: string) {
    return this.#reverseMap.get(key)
  }

  dots (keys: string[]) {
    return BrailleChar.combine(keys.map(key => this.dot(key)))
  }
}
