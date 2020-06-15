import { TestBed } from '@angular/core/testing'

import { KeyConfigService } from './key-config.service'

describe('KeyConfigService', () => {
  let service: KeyConfigService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(KeyConfigService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
