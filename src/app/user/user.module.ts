import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask'

import { AppMaterialModule } from '../app-material.module'
import { AuthGuard } from '../auth/auth-guard.service'
import { SharedComponentsModule } from '../shared-components.module'
import { FieldErrorModule } from '../user-controls/field-error/field-error.module'
import { LemonRaterModule } from '../user-controls/lemon-rater/lemon-rater.module'
import { LogoutComponent } from './logout/logout.component'
import { NameInputComponent } from './name-input/name-input.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module'
import { UserResolve } from './user/user.resolve'
import { ViewUserComponent } from './view-user/view-user.component'

@NgModule({
  declarations: [ProfileComponent, LogoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FieldErrorModule,
    AppMaterialModule,
    UserMaterialModule,
    LemonRaterModule,
    NgxMaskModule.forChild(),
    SharedComponentsModule,
  ],
  providers: [UserResolve, AuthGuard],
})
export class UserModule {}
