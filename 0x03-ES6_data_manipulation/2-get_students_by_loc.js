export default function getStudentsByLocation(getListStudents, city) {
  const cities = getListStudents.filter((student) => student.location === city);
  return cities;
}
