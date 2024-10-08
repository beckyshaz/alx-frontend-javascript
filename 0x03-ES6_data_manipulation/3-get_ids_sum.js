export default function getStudentIdsSum(getListStudents) {
  const sumId = getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumId;
}
