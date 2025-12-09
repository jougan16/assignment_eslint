export function isValidUsername(input) {
  const safeRegex = /^[a-zA-Z0-9]+$/;
  return regex.test(input);
}