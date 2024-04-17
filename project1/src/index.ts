<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Grades</title>
</head>
<body>

<h1>Student Grades</h1>

<div>
    <label for="name">Name:</label>
    <input type="text" id="name">
</div>

<div>
    <label for="marks">Marks (comma separated):</label>
    <input type="text" id="marks">
</div>

<button onclick="addStudent()">Add Student</button>
<button onclick="calculateGrade()">Get Grade</button>
<button onclick="calculateClassAverage()">Get Class Average</button>

<div id="output"></div>

<script src="script.js"></script> <!-- Include the compiled JavaScript file -->

</body>
</html>
