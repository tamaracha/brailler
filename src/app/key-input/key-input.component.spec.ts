import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { KeyInputComponent } from './key-input.component'

describe('KeyInputComponent', () => {
  let component: KeyInputComponent
  let fixture: ComponentFixture<KeyInputComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [KeyInputComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
