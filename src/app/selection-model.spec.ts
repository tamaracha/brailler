import { SelectionModel } from './selection-model'

describe('SelectionModel', () => {
  it('should create an instance', () => {
    expect(new SelectionModel({ start: 0, end: 0 })).toBeTruthy()
  })
})
