function newStudent(name, age) {

    return {name, age}
}

let students = [
    newStudent("Thalysson", 17),
    newStudent("Thayssa", 14),
    newStudent("Junior", 41)
]

function classAge(total, student) {
    return total + student.age;
}

console.log(students.reduce(classAge, 0));