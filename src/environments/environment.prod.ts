import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  production: true,
  authMode: AuthMode.Firebase,
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
