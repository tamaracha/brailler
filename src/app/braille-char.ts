export class BrailleChar {
  /** Masks for single dots and empty cell */
  static empty = new BrailleChar(0)
  static dot1 = new BrailleChar(1)
  static dot2 = new BrailleChar(1 << 1)
  static dot3 = new BrailleChar(1 << 2)
  static dot4 = new BrailleChar(1 << 3)
  static dot5 = new BrailleChar(1 << 4)
  static dot6 = new BrailleChar(1 << 5)
  static dot7 = new BrailleChar(1 << 6)
  static dot8 = new BrailleChar(1 << 7)
  private static unicodeOffset = 10240
  #rawValue: number
  get rawValue() {
    return this.#rawValue
  }
  constructor(rawValue: number = 0) {
    this.#rawValue = Math.min(Math.max(rawValue, 0), 255)
  }

  static combine(dots: BrailleChar[]) {
    return dots.reduce((ac, d) => ac.add(d), new BrailleChar())
  }

  static fromCodePoint(cp: number): BrailleChar {
    return new BrailleChar(cp - BrailleChar.unicodeOffset)
  }

  static fromString(str: string): BrailleChar {
    if (str.length < 1) {
      return new BrailleChar()
    }
    return BrailleChar.fromCodePoint(str.charCodeAt(0))
  }

  toCodePoint() {
    return this.rawValue + BrailleChar.unicodeOffset
  }

  toString() {
    return String.fromCharCode(this.toCodePoint())
  }

  get dot1(): boolean {
    return this.has(BrailleChar.dot1)
  }
  set dot1(state: boolean) {
    state === true ? this.add(BrailleChar.dot1) : this.remove(BrailleChar.dot1)
  }

  get dot2(): boolean {
    return this.has(BrailleChar.dot2)
  }
  set dot2(state: boolean) {
    state === true ? this.add(BrailleChar.dot2) : this.remove(BrailleChar.dot2)
  }

  get dot3(): boolean {
    return this.has(BrailleChar.dot3)
  }
  set dot3(state: boolean) {
    state === true ? this.add(BrailleChar.dot3) : this.remove(BrailleChar.dot3)
  }

  get dot4(): boolean {
    return this.has(BrailleChar.dot4)
  }
  set dot4(state: boolean) {
    state === true ? this.add(BrailleChar.dot4) : this.remove(BrailleChar.dot4)
  }

  get dot5(): boolean {
    return this.has(BrailleChar.dot5)
  }
  set dot5(state: boolean) {
    state === true ? this.add(BrailleChar.dot5) : this.remove(BrailleChar.dot5)
  }

  get dot6(): boolean {
    return this.has(BrailleChar.dot6)
  }
  set dot6(state: boolean) {
    state === true ? this.add(BrailleChar.dot6) : this.remove(BrailleChar.dot6)
  }

  get dot7(): boolean {
    return this.has(BrailleChar.dot7)
  }
  set dot7(state: boolean) {
    state === true ? this.add(BrailleChar.dot7) : this.remove(BrailleChar.dot7)
  }

  get dot8(): boolean {
    return this.has(BrailleChar.dot8)
  }
  set dot8(state: boolean) {
    state === true ? this.add(BrailleChar.dot8) : this.remove(BrailleChar.dot8)
  }

  has(dot: BrailleChar): boolean {
    return (this.rawValue & dot.rawValue) !== 0
  }

  add(dot: BrailleChar): BrailleChar {
    this.#rawValue |= dot.rawValue
    return this
  }

  remove(dot: BrailleChar): BrailleChar {
    this.#rawValue &= ~dot.rawValue
    return this
  }

  toggle(dot: BrailleChar): BrailleChar {
    this.#rawValue ^= dot.rawValue
    return this
  }

  clear() {
    this.#rawValue = 0
    return this
  }
}
