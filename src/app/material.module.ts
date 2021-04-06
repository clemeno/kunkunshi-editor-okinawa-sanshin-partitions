
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material/tooltip'

const importExport: any[] = [
  MatButtonModule,
  MatCardModule,
  MatTooltipModule
]

@NgModule({
  imports: importExport,
  exports: importExport
})
export class MaterialModule { }
