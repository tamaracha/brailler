import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'

import { BrailleFormComponent } from './braille-form.component'
import { SelectionModelDirective } from '../selection-model.directive'

describe('BrailleFormComponent', () => {
  let component: BrailleFormComponent
  let fixture: ComponentFixture<BrailleFormComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatInputModule],
      declarations: [BrailleFormComponent, SelectionModelDirective]
    }).compileComponents()
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
