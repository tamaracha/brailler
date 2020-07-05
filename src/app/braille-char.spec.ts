import { BrailleChar } from './braille-char'

describe('BrailleChar', () => {
  it('should create an instance', () => {
    expect(new BrailleChar(2)).toBeTruthy()
  })
  it('should contain dot 1', () => {
    expect(new BrailleChar(3).dot1).toBeTruthy()
    expect(new BrailleChar(2).dot1).toBeFalsy()
  })
  it('should contain dots', () => {
    expect(new BrailleChar(255).has(new BrailleChar(7))).toBeTruthy()
  })
  it('should combine dots', () => {
    const dots = [BrailleChar.dot1, BrailleChar.dot3, BrailleChar.dot5]
    const combined = BrailleChar.combine(dots)
    expect(combined.rawValue === 21).toBeTruthy()
  })
})
