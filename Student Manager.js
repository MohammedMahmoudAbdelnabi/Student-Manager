let students = [
 {name:"Ali", grade:75},
 {name:"Omar", grade:90},
 {name:"Sara", grade:82},
 {name:"Ahmed", grade:60},
 {name:"Mona", grade:95}
];

console.log("Students List:");
for(let i = 0; i < students.length; i++){
    console.log(students[i].name , students[i].grade);
}

console.log("-------------------");

// حساب المتوسط
let sum = 0;

for(let i = 0; i < students.length; i++){
    sum = sum + students[i].grade;
}

let average = sum / students.length;

console.log("Average Grade:", average);

console.log("-------------------");

// أعلى درجة
let max = students[0].grade;

for(let i = 0; i < students.length; i++){
    if(students[i].grade > max){
        max = students[i].grade;
    }
}

console.log("Highest Grade:", max);

console.log("-------------------");

// أقل درجة
let min = students[0].grade;

for(let i = 0; i < students.length; i++){
    if(students[i].grade < min){
        min = students[i].grade;
    }
}

console.log("Lowest Grade:", min);

console.log("-------------------");

// الطلاب الناجحين
console.log("Passed Students:");

for(let i = 0; i < students.length; i++){
    if(students[i].grade >= 70){
        console.log(students[i].name);
    }
}

console.log("-------------------");

// البحث عن طالب
let searchName = "Sara";
let found = false;

for(let i = 0; i < students.length; i++){
    if(students[i].name === searchName){
        console.log("Student found:", students[i]);
        found = true;
    }
}

if(found === false){
    console.log("Student not found");
}

console.log("-------------------");

// إضافة طالب جديد
let newStudent = {name:"Khaled", grade:88};
students.push(newStudent);

console.log("Student Added:");
console.log(students);

console.log("-------------------");

// حذف آخر طالب
students.pop();

console.log("After Removing Last Student:");
console.log(students);