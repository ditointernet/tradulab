require('dotenv').config();

export function getOrThrow(envKey: string): string {
  const envValue = process.env[envKey];

  if (!envValue) {
    throw new Error(`🤫: Environment variable ${envKey} not set.`);
  }

  return envValue;
}
