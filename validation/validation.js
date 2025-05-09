export const validationRules = {
    "email": {
      "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
      "errorMessage": "Invalid email address"
    },
    "password": {
      "minLength": 8,
      "uppercase": "(?=.*[A-Z])",
      "lowercase": "(?=.*[a-z])",
      "number": "(?=.*\\d)",
      "specialCharacter": "(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?])",
      "noSpace": "(?=\\s)",
      "errorMessages": {
        "minLength": "Password must be at least 8 characters long",
        "uppercase": "Password must contain at least one uppercase letter",
        "lowercase": "Password must contain at least one lowercase letter",
        "number": "Password must contain at least one number",
        "specialCharacter": "Password must contain at least one special character",
        "noSpace": "Password cannot contain spaces",
        "equalCurrent": "New password must be different from the current password",
        "enterCurrent": "Enter your current password",
        "confirm": "Passwords must match"
      }
    },
    "firstName": {
      "pattern": "^[a-zA-Z]+$",
      "minLength": 1,
      "firstCapital": true,
      "errorMessages": {
        "pattern": "Name must contain only english letters",
        "minLength": "Name must be at least one character long",
        "firstCapital": "Name must start with a capital letter"
      }
    },
    "lastName": {
    "pattern": "^[a-zA-Z]+$",
      "minLength": 1,
      "firstCapital": true,
      "errorMessages": {
        "pattern": "surname must contain only english letters",
        "minLength": "surname must be at least one character long",
        "firstCapital": "surname must start with a capital letter"
      }
    }
  }

export const library = {
  "en": {
    "name": "English",
    "script": "Latin",
    "alphabet": [
      "a", "b", "c", "d", "e", "f", "g",
      "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u",
      "v", "w", "x", "y", "z",
      "A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U",
      "V", "W", "X", "Y", "Z"
    ]
  }
};