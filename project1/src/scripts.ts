type Student = { id: number, name: string, marks: number[] };

let students: Student[] = [
    { id: 1, name: 'Karthik', marks: [98, 99, 95] },
    { id: 2, name: 'Krish', marks: [97, 99, 99] },
    { id: 3, name: 'raj', marks: [56, 78, 67] },
    { id: 4, name: 'rahul', marks: [33, 68, 45] }
];

function addStudent() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const marksInput = (document.getElementById('marks') as HTMLInputElement).value;
    const marks = marksInput.split(',').map(mark => parseInt(mark.trim(), 10));
    const id = students.length + 1;
    students.push({ id, name, marks });
    displayStudents();
}

function calculateGrade() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const student = students.find(s => s.name === name);
    if (student) {
        const average = student.marks.reduce((acc, curr) => acc + curr, 0) / student.marks.length;
        const grade = calcGrade(average);
        document.getElementById('output')!.innerHTML = `${name}'s Grade: ${grade}`;
    } else {
        document.getElementById('output')!.innerHTML = 'Student not found!';
    }
}

function calculateClassAverage() {
    const subjectAverages = [];
    for (let i = 0; i < 3; i++) {
        const classTotal = students.reduce((acc, curr) => acc + curr.marks[i], 0);
        const classAverage = classTotal / students.length;
        subjectAverages.push(classAverage.toFixed(2));
    }
    document.getElementById('output')!.innerHTML = `Class Averages: ${subjectAverages.join(', ')}`;
}

function calcGrade(average: number): string {
    if (average > 90) {
        return 'S';
    } else if (average > 80 && average < 90) {
        return 'A+';
    } else if (average > 70 && average < 80) {
        return 'A';
    } else if (average > 60 && average < 70) {
        return 'B';
    } else if (average >= 50 && average < 60) {
        return 'C';
    } else {
        return 'F';
    }
}

function displayStudents() {
    let output = '';
    students.forEach(student => {
        output += `<p>ID: ${student.id}, Name: ${student.name}, Marks: [${student.marks.join(', ')}]</p>`;
    });
    document.getElementById('output')!.innerHTML = output;
}

displayStudents();
