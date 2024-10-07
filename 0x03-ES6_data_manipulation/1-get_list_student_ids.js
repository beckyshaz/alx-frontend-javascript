export default function getListStudentIds(arrays) {
  if (Array.isArray(arrays)) {
    const array1 = arrays.map((array) => array.id);
    return array1;
  }
  return [];
}
