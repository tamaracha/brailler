import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    FlexLayoutModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
