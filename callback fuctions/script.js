
// suppose this is a database

let Students = [
    {name: "Nishi", subject:"React.JS"},
    {name: "Sandeep", subject:"JavaScript"},
    {name: "Shryansh", subject:"Node.JS"}
];


function enrollStudent(studentObj,getStudent)         // add new Student to Database
{
   setTimeout(function() {
    Students.push(studentObj)
    getStudent();
   }, 5000);
}



function getStudent()         // print student list from Database
{     
    setTimeout(function(){
        let str = "";
        Students.forEach(function(student){
            str += `<li>${student.name}:  ${student.subject}</li>`;
        });
        document.getElementById('list').innerHTML= str;
    },1000);
}


let newStudent = {name:'sameer', subject:'HTML/CSS'};

// enrollStudent(newStudent);

enrollStudent(newStudent,getStudent);    // callback
// getStudent();


















