// for only allowing numerican inputs
export function allowOnlyNumbers(event: KeyboardEvent) {
  const key = event.key;
  // Allow control keys, digits, and optionally '.'
  if (!/[0-9]/.test(key) && key !== 'Backspace') {
    event.preventDefault();
  }
}
// for only allowing numerican inputs
export function filterForSQL(event: KeyboardEvent) {
  const key = event.key;
  // Allow control keys, digits, and optionally '.'
  if (!/[0-9]/.test(key) && !/[a-z]/.test(key) && !/[A-Z]/.test(key) && key !== 'Backspace') {
    event.preventDefault();
  }
}