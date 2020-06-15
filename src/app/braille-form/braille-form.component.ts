import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-braille-form',
  templateUrl: './braille-form.component.html',
  styleUrls: ['./braille-form.component.css']
})
export class BrailleFormComponent implements OnInit {
  label = 'Enter Braille here'
  hint = 'Compose braille characters by simultaniously pressing the dot keys.'

  ngOnInit (): void {
  }
}
