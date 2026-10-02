export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGradeObj = newGrades.filter((gradeObj) => gradeObj.studentId === student.id);
      
      if (studentGradeObj.length > 0) {
        return { ...student, grade: studentGradeObj[0].grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
