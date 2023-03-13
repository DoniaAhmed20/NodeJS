const validate = require("../utils/StudentsValidation");
let StudentModel = require("../Models/StudentsModel");

var GetAllStudents = (req,res)=>{
    var AllStudents = StudentModel.GetAllStudents();
    res.json(AllStudents);//[]
}
var GetStudentByID = (req,res)=>{
    var id=req.params.id;
    var foundStudent = Students.find((s)=>{return s.id == id})
    res.json(foundStudent);
}
var AddNewStudent = (req,res)=>{
    var newStudent = req.body; 
    var valid = validate(newStudent);
    if(valid){
        // newStudent.id = ++id;
        // Students.push(newStudent);
        // res.send("Created Successfully");
        var newStudentModel = new StudentModel(newStudent.name, newStudent.age, newStudent.dept)
        newStudentModel.saveStudent();
        res.status(201).json(newStudentModel);
    }else{
        res.status(400).send("Check ur Data Type")
    }
};
var DeleteStudentByID = (req,res)=>{
    //array ==> find ==> index ==> splice(3,1)
    var ID = req.params.id;
    var index;
    Students.find((s,i)=>{
        if(s.id == ID){
            index = i;
        }
    });
    console.log(index)
    Students.splice(index, 1);
    res.send("Deleted Successfully");
};
var UpdateStudentByID = (req, res)=>{
    var ID = req.params.id;
    var updatedStudent = req.body;
    var index ;
    Students.find((s,i)=>{
        if(s.id == ID){
            // s = updatedStudent; 
            index = i;
            s.name = updatedStudent.name;
            s.age = updatedStudent.age;
        }
    });

    Students[index] = updatedStudent; 
    console.log(index)
    res.json(Students[index]||"Not Found")
}
module.exports = {
    GetAllStudents,
    GetStudentByID,
    AddNewStudent,
    DeleteStudentByID,
    UpdateStudentByID
};