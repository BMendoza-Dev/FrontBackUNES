import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static confirmPassword(control: AbstractControl): ValidationErrors | null {
      const password = control.get("password");
      const confirm = control.get("confirmPassword");
      if (password?.valid && password?.value === confirm?.value) {
        confirm?.setErrors(null);
        return null;
      }
      confirm?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  export class PasswordValidatorsDele {
    static confirmPasswordDele(control: AbstractControl): ValidationErrors | null {
      const password = control.get("passwordDele");
      const confirm = control.get("confirmPasswordDele");
      if (password?.valid && password?.value === confirm?.value) {
        confirm?.setErrors(null);
        return null;
      }
      confirm?.setErrors({ passwordMismatchDele: true });
      return { passwordMismatchDele: true };
    }
  }