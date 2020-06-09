import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys-form',
  templateUrl: './keys-form.component.html',
  styleUrls: ['./keys-form.component.css']
})
export class KeysFormComponent implements OnInit {

  @Input() dots: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
