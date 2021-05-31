let student1 = {
    name: "Igor",
    score: 8.5
}

let student2 = '{"name": "Fábio", "score": 7.8}'

let b1 = JSON.stringify(student1);
let b2 = JSON.parse(student2);

console.log(student1);
console.log(student2);
console.log(b1);
console.log(b2) 

console.log(b1.name);
console.log(b1.score);
console.log(b2.name);
console.log(b2.score);