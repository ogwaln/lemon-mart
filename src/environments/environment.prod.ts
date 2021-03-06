import { AuthMode } from '../app/auth/auth.enum'

export const environment = {
  production: true,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.CustomServer,
  firebase: {
    apiKey: 'AIzaSyCyv_ZFRrFHa9uxmce3WC1sd5ejS7TzNlU',
    authDomain: 'lemon-mart-6aa50.web.app',
    databaseURL: 'https://lemon-mart-6aa50.webio.app/',
    projectId: 'lemon-mart-6aa50',
    storageBucket: '',
    messagingSenderId: '',
    appId: '1:717215363293:web:2e39cc954905021317eb34',
    measurementId: '',
  },
}
