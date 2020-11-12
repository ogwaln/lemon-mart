import { Validators } from '@angular/forms'

export const EmailValidation = [Validators.required, Validators.email] as Validators
export const PasswordValidation = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(50),
] as Validators
