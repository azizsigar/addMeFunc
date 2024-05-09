const students = [
    { name: "John", grades: [80, 90, 85] },
    { name: "Alice", grades: [95, 88, 92] },
    { name: "Bob", grades: [75, 82, 78] },
  ];
  
  // print names and grades
  students.forEach((student) => {
    let name = student.name;
    console.log(`Name: ${name}`);
  // second for each nested
    student.grades.forEach((grade, index) => {
      console.log(`  Exam ${index + 1}: ${grade}`);
    });
  });
  