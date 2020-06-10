/* eslint-env jasmine */
import { TestBed, async } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { AppComponent } from './app.component'
import { KeysFormComponent } from './keys-form/keys-form.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatGridListModule, MatInputModule, MatToolbarModule],
      declarations: [
        AppComponent,
        KeysFormComponent
      ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title \'brailler\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Brailler')
  })
})
