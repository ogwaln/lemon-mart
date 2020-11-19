import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  template: `
    <div
      *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin"
      fxLayout="column"
      fxLayoutAlign="center center"
    >
      <span class="mat-display-2">Hello, Younger!</span>
      <button mat-raised-button color="primary" routerLink="/">click me for fun!</button>
    </div>
    <ng-template #doLogin>
      <app-login></app-login>
    </ng-template>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
