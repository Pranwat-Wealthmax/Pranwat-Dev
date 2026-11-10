export interface PasswordStrength {
  minLength: boolean;
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasSpecialChar: boolean;
  hasNumber: boolean;
}
export function checkPasswordStrength(password: string): PasswordStrength {
  return {
    minLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9\s]/.test(password),
    hasNumber: /[0-9]/.test(password)
  };
}
export function isPasswordValid(password: string): boolean {
  const result = checkPasswordStrength(password);
  return Object.values(result).every(Boolean);
}