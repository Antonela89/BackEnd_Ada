export function capitalize(str: string): string | null {
  if (!str || str.length === 0) {
    return null;
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

export function reverse(str: string): string | null {
  if (str) {
    return str.split('').reverse().join('')
  } else {
    return null;
  }
}
