export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const array = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      array.push(value.slice(startString.length));
    }
  }
  return array.join('-');
}
