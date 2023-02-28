var http = require("http");
var fs = require("fs")
var result = "result.txt";
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let arr = req.url.split("/");
        let oper = arr[1];
        let number1 = parseInt(arr[2],10);
        let number2 = parseInt(arr[3],10);
        switch (oper){
            case "sum":
                result = number1 + number2;
                res.write(JSON.stringify("The Sum Of Numbers= " + result));
                fs.appendFileSync(
                    "lab1.txt",JSON.stringify("The Sum Of Numbers= " + result)
                );
                break;
            case "sub":
                    result = number1 - number2;
                    res.write(JSON.stringify("The Subtraction Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1.txt",
                        JSON.stringify("The Subtraction Of Numbers= " + result)
                    );
                    break;
            case "multi":
                    result = number1 * number2;
                    res.write(JSON.stringify("The Muliplication Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1.txt",
                        JSON.stringify("The Muliplication Of Numbers= " + result)
                    );
                    break;
            case "divide":
                    result = number1 / number2;
                    res.write(JSON.stringify("The Division Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1.txt",
                        JSON.stringify("The Division Of Numbers= " + result)
                    );
                    break;
            default:
                res.write("<h2>It is unvalid, Please Enter valid operation<h2>");
                fs.appendFileSync(
                    "lab1.txt",
                    JSON.stringify("It is unvalid, Please Enter valid operation" )
                );
                break;
            }
        }
        res.end();
}).listen("7000", ()=>{
    console.log("port 7000");
})
