/* eslint-env jasmine */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { KeysFormComponent } from './keys-form.component'
import { KeyInputComponent } from '../key-input/key-input.component'
import { KeyConfigService } from '../key-config.service'

describe('KeysFormComponent', () => {
  let component: KeysFormComponent
  let fixture: ComponentFixture<KeysFormComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [KeyConfigService],
      declarations: [KeysFormComponent, KeyInputComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
