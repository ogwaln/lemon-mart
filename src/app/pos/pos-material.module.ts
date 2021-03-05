import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

const modules = [MatIconModule]

@NgModule({
  exports: [modules],
})
export class PosMaterialModule {}
