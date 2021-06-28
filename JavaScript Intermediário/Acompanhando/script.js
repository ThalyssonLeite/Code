function newStudent(name, age) {

    return {name, age}
}

let students = [
    newStudent("Thalysson", 17),
    newStudent("Thayssa", 14),
    newStudent("Junior", 41)
]

let isItUnder30 = function(aluno) {
    return aluno.age < 30
}

let isItOver30 = function(aluno) {
    return aluno.age > 30
}

console.log(students.filter(isItUnder30));