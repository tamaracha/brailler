import { ElementRef, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BrailleService } from './braille.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('brl') brlInput: ElementRef
  title = 'brailer';
  braille_dots = ['a', 'e', 'i', 't', 'r', 'n', 'h', 's']
  input = ''
  constructor (private brailleService: BrailleService) {}
  ngAfterViewInit () {
    this.brailleService.brailleEvents(this.brlInput.nativeElement, this.braille_dots).subscribe(
      b => this.input += b
    )
  }
}
