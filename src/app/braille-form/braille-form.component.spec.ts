import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BrailleFormComponent } from './braille-form.component'

describe('BrailleFormComponent', () => {
  let component: BrailleFormComponent
  let fixture: ComponentFixture<BrailleFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrailleFormComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BrailleFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
