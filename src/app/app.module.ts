import { partitionApplyMerge } from '@angular-devkit/schematics'
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuth } from '@angular/fire/auth'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IConfig, NgxMaskModule } from 'ngx-mask'
import { environment } from 'src/environments/environment'

import { AppMaterialModule } from './app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { authFactory } from './auth/auth.factory'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { FieldErrorModule } from './user-controls/field-error/field-error.module'

// import { AngularFireModule } from '@angular/fire/firebase.app.module'

// import { InMemoryAuthService } from './auth/auth.inmemory.service'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  showMaskTyped: true,
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FieldErrorModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [
    // { provide: AuthService, useClass: InMemoryAuthService },
    // { provide: AuthService, useClass: FirebaseAuthService },
    {
      provide: AuthService,
      useFactory: authFactory,
      deps: [AngularFireAuth, HttpClient],
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
