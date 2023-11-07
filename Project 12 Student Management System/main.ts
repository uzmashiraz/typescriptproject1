class Student {
    constructor(public id: number, public name: string, public grade: string) {}
  }
  
  class StudentManagementSystem {
    private students: Student[] = [];
  
    addStudent(id: number, name: string, grade: string): void {
      const student = new Student(id, name, grade);
      this.students.push(student);
    }
  
    getStudentById(id: number): Student | undefined {
      return this.students.find(student => student.id === id);
    }
  
    getAllStudents(): Student[] {
      return this.students;
    }
  }
  
  // Example usage
  const studentSystem = new StudentManagementSystem();
  studentSystem.addStudent(1, 'Alice', 'A');
  studentSystem.addStudent(2, 'Bob', 'B');
  studentSystem.addStudent(3, 'Charlie', 'C');
  
  console.log(studentSystem.getAllStudents());
  
  const studentById = studentSystem.getStudentById(2);
  if (studentById) {
    console.log(`Student found: ${studentById.name}, Grade: ${studentById.grade}`);
  } else {
    console.log('Student not found');
  }