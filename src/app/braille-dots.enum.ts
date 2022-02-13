export enum BrailleDots {
  space = 0,
  dot1 = 1 << 0,
  dot2 = 1 << 1,
  dot3 = 1 << 2,
  dot4 = 1 << 3,
  dot5 = 1 << 4,
  dot6 = 1 << 5,
  dot7 = 1 << 6,
  dot8 = 1 << 7
}

export function brailleChar(from: number[]) {
  const scalar = from.reduce((ac, i) => {
    return ac + i
  }, 10240)
  return String.fromCharCode(scalar)
}
