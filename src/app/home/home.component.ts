import { Component } from '@angular/core'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
  template: `
    <div
      *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin"
      fxLayout="column"
      fxLayoutAlign="center center"
    >
      <span class="mat-display-2">Hello, Younger!</span>
      <button mat-raised-button color="primary" routerLink="/">click me for fun!</button>
      <span fxLayout="column" class="mat-display-1"
        >You get a lemon, you get a lemon, you get a lemon...</span
      >
      <span class="mat-display-1">Everybody gets a lemon.</span>
    </div>
    <ng-template #doLogin>
      <app-login></app-login>
    </ng-template>
  `,
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}
