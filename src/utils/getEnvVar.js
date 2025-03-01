getEnvVar.js;
import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
  const value = process.env[name]?.trim(); // Видаляємо пробіли

  if (value !== undefined && value !== '') {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(`Missing required environment variable: ${name}`);
}

// Додаткова функція для числових змінних (наприклад, PORT)
export function getEnvVarAsNumber(name, defaultValue) {
  const value = getEnvVar(name, defaultValue);

  const numberValue = Number(value);
  if (isNaN(numberValue)) {
    throw new Error(`Invalid number format for environment variable: ${name}`);
  }

  return numberValue;
}
