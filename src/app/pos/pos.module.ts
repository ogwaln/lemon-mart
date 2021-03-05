import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PosMaterialModule } from './pos-material.module'
import { PosRoutingModule } from './pos-routing.module'
import { PosComponent } from './pos/pos.component'

@NgModule({
  declarations: [PosComponent],
  imports: [CommonModule, PosRoutingModule, PosMaterialModule],
})
export class PosModule {}
