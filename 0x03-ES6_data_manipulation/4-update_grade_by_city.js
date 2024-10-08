export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradesObj = newGrades.find((grade) => student.studentId === student.id);
      return {
        ...student,
        grade: gradesObj ? gradesObj.grade : 'N/A',
      };
    });
}
