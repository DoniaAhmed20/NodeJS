var StudentsArr = [];//json | mongoDB
var id = 0;
class Students{
    constructor(name, age, dept){
        this.id = ++id;
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    //Get All Students
    static GetAllStudents(){
        return StudentsArr;
    }
    //Add New Student
    saveStudent(){
        StudentsArr.push(this)
        return this;
    }
}

module.exports = Students;  //class name
