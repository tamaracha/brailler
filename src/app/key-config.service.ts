import { Injectable } from '@angular/core'
import { BrailleDots } from './braille-dots.enum'

interface KeyMap {
  space: string
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
  private current: KeyMap = KeyConfigService.quertzMap()
  private reverseMap = new Map<string, number>()
  static quertzMap (): KeyMap {
    return {
      space: ' ',
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

  getCurrent () {
    return this.current
  }

  load (): KeyMap {
    return JSON.parse(window.localStorage.getItem('key_config'))
  }

  save () {
    const json = JSON.stringify(this.current)
    window.localStorage.setItem('key_config', json)
  }

  update (map: KeyMap) {
    this.current = map
    this.updateReverseMap()
    this.save()
  }

  updateReverseMap () {
    this.reverseMap.clear()
    Object.entries(this.current)
      .forEach(([k, v]) => this.reverseMap.set(v, BrailleDots[k]))
  }

  set (dot: string, key: string) {
    this.reverseMap.delete(this.current[dot])
    this.current[dot] = key
    this.reverseMap.set(key, BrailleDots[dot])
  }

  hasKey (key: string) {
    return this.reverseMap.has(key)
  }

  dot (key: string) {
    return this.reverseMap.get(key)
  }

  dots (keys: string[]) {
    return keys.map(key => this.dot(key))
  }
}
