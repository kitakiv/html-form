import { validationRules } from './validation.js'

export class ValidationPage {

  constructor() {
    this.errors = {};
  }

  static validatePattern(value, pattern) {
    const regex = new RegExp(pattern);
    return regex.test(value);
  }

  static validateMinLength(value, minLength) {
    if (!value) {
      return false;
    }

    return value.length >= minLength;
  }

  static validateFirstCapital(value) {
    return /^[A-Z]/.test(value);
  }

  validateEmail(email) {
    const rule = validationRules.email;
    this.errors.email = [];

    if (!ValidationPage.validatePattern(email, rule.pattern)) {
      this.errors.email.push(rule.errorMessage);
    }

    if (this.errors.email.length === 0) {
      delete this.errors.email;
    }
  }

  validatePassword(
    password,
    type = 'password',
  ) {
    const rule = validationRules.password;
    this.errors[type] = [];

    if (password.length < rule.minLength) {
      this.errors[type].push(rule.errorMessages.minLength);
    }

    if (!ValidationPage.validatePattern(password, rule.uppercase)) {
      this.errors[type].push(rule.errorMessages.uppercase);
    }

    if (!ValidationPage.validatePattern(password, rule.lowercase)) {
      this.errors[type].push(rule.errorMessages.lowercase);
    }

    if (!ValidationPage.validatePattern(password, rule.number)) {
      this.errors[type].push(rule.errorMessages.number);
    }

    if (
      !ValidationPage.validatePattern(password, rule.specialCharacter)
    ) {
      this.errors[type].push(rule.errorMessages.specialCharacter);
    }

    if (ValidationPage.validatePattern(password, rule.noSpace)) {
      this.errors[type].push(rule.errorMessages.noSpace);
    }

    if (this.errors[type].length === 0) {
      delete this.errors[type];
    }
  }

  validateName(name, field) {
    const rule = validationRules[field];
    this.errors[field] = [];

    if (!ValidationPage.validatePattern(name, rule.pattern)) {
      this.errors[field].push(rule.errorMessages.pattern);
    }

    if (!ValidationPage.validateMinLength(name, rule.minLength)) {
      this.errors[field].push(rule.errorMessages.minLength);
    }

    if (
      rule.firstCapital &&
      !ValidationPage.validateFirstCapital(name)
    ) {
      this.errors[field].push(rule.errorMessages.firstCapital);
    }

    if (this.errors[field].length === 0) {
      delete this.errors[field];
    }
  }


  validateForm(data) {
    this.errors = {};
    this.validateEmail(data.email);
    this.validatePassword(data.password);
    this.validateName(data.firstName, 'firstName');
    this.validateName(data.lastName, 'lastName');
    return this.errors;
  }
}