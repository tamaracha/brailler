/* eslint-env jasmine */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list'

import { KeysFormComponent } from './keys-form.component'

describe('KeysFormComponent', () => {
  let component: KeysFormComponent
  let fixture: ComponentFixture<KeysFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatGridListModule],
      declarations: [KeysFormComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysFormComponent)
    component = fixture.componentInstance
    component.dots = ['h', 'i', 'e', 'a', 't', 'r', 'n', 's']
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
