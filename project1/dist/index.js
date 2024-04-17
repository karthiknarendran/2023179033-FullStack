"use strict";
let students = [
    { id: 1, name: 'Karthik', marks: [98, 99, 95] },
    { id: 2, name: 'Krish', marks: [97, 99, 99] },
    { id: 3, name: 'raj', marks: [56, 78, 67] },
    { id: 4, name: 'rahul', marks: [33, 68, 45] }
];
function calcAvg(student) {
    for (let i = 0; i < student.length; i++) {
        let student_average = 0;
        for (let j = 0; j < student[i].marks.length; j++) {
            student_average += student[i].marks[j];
        }
        student_average = student_average / 3;
        console.log("Name: " + student[i].name + " Average: " + student_average.toFixed(2) + " Grade: " + calcGrade(student_average));
    }
}
function calcGrade(average) {
    if (average > 90) {
        return 'S';
    }
    else if (average > 80 && average < 90) {
        return 'A+';
    }
    else if (average > 70 && average < 80) {
        return 'A';
    }
    else if (average > 60 && average < 70) {
        return 'B';
    }
    else if (average >= 50 && average < 60) {
        return 'C';
    }
    else {
        return 'F';
    }
}
function classAverage(students) {
    for (let i = 0; i < 3; i++) {
        let class_avg = 0;
        for (let j = 0; j < students.length; j++) {
            class_avg += students[j].marks[i];
        }
        class_avg = class_avg / students.length;
        console.log("Class average for subject " + (i + 1) + " : " + class_avg.toFixed(2));
    }
}
calcAvg(students);
classAverage(students);
//# sourceMappingURL=index.js.map