export default function getStudentsByLocation(getListStudents, city) {
  if (Array.isArray(getListStudents) || typeof city === 'string') {
    const cities = getListStudents.filter((student) => student.location === city);
    return cities;
  }
  return [];
}
