import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysFormComponent } from './keys-form.component';

describe('KeysFormComponent', () => {
  let component: KeysFormComponent;
  let fixture: ComponentFixture<KeysFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
