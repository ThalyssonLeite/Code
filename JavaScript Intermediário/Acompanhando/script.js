function newStudent(name, age) {

    return {name, age}
}

let students = [
    newStudent("Thalysson", 17),
    newStudent("Thayssa", 14),
    newStudent("Junior", 41)
]

function nameAndAge(student) {
    return {
        name: student.name,
        age: student.age
    }
}



console.log(students.map(nameAndAge));