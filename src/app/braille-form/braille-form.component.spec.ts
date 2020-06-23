import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input'

import { BrailleFormComponent } from './braille-form.component'
import { SelectionModelDirective } from '../selection-model.directive'

describe('BrailleFormComponent', () => {
  let component: BrailleFormComponent
  let fixture: ComponentFixture<BrailleFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatInputModule],
      declarations: [BrailleFormComponent, SelectionModelDirective]
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
