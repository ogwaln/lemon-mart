// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.CustomServer,
  firebase: {
    apiKey: 'AIzaSyD3knqIf2NQPFEbe8sa2mX3TfY9cKDUTLE',
    authDomain: 'lemon-mart-6aa50.web.app',
    databaseURL: 'https://lemon-mart-6aa50.webio.app/',
    projectId: 'lemon-mart-6aa50',
    storageBucket: '',
    messagingSenderId: '',
    appId: '1:717215363293:web:2e39cc954905021317eb34',
    measurementId: '',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
