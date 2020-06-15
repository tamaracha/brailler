import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brailler';
  brailleDots = ['a', 'e', 'i', 't', 'r', 'n', 'h', 's']
}
