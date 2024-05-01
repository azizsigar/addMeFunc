const students = [
    { name: "Alice", courses: [{ name: "Math", score: 80 }, { name: "Science", score: 95 }, { name: "English", score: 75 }] },
    { name: "Bob", courses: [{ name: "Math", score: 70 }, { name: "Science", score: 85 }, { name: "English", score: 90 }] },
    { name: "Charlie", courses: [{ name: "Math", score: 65 }, { name: "Science", score: 80 }, { name: "English", score: 88 }] },
  ];
  
  const studentAverages = {};
  
  students.forEach(student => {
    let totalScore = 0;
    let courseCount = 0;
  
    student.courses.forEach(course => {
      totalScore += course.score;
      courseCount++;
    });
  
    studentAverages[student.name] = totalScore / courseCount;
  });
  
  console.log(studentAverages);
  