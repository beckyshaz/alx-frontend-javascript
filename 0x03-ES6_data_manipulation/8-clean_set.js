export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const array = [];
  for (const value of set) {
    if (value.startsWith(startString) && typeof startString === 'string') {
      array.push(value.slice(startString.length));
    }
  }
  return array.join('-');
}
