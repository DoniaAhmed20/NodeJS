var http = require("http");
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        let arr = req.url.split("/");
        let oper = arr[1];
        var result = 0;
        switch (oper){
            case "sum":
                for(let i=2; i<arr.length; i++){
                    result += parseInt(arr[i], 10);
                }
                res.write(JSON.stringify("The Sum Of Numbers= " + result));
                fs.appendFileSync(
                    "lab1_bouns.txt",JSON.stringify("The Sum Of Numbers= " + result)
                );
                break;
            case "sub":
                    for(let i=2; i<arr.length; i++){
                        result -= parseInt(arr[i], 10);
                    }
                    res.write(JSON.stringify("The Subtraction Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1_bouns.txt",
                        JSON.stringify("The Subtraction Of Numbers= " + result)
                    );
                    break;
            case "multi":
                    for(let i=2; i<arr.length; i++){
                        result *= parseInt(arr[i], 10);
                    }
                    res.write(JSON.stringify("The Muliplication Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1_bouns.txt",
                        JSON.stringify("The Muliplication Of Numbers= " + result)
                    );
                    break;
            case "divide":
                    for(let i=2; i<arr.length; i++){
                        result /= parseInt(arr[i], 10);
                    }
                    res.write(JSON.stringify("The Division Of Numbers= " + result));
                    fs.appendFileSync(
                        "lab1_bouns.txt",
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
}).listen("5000", ()=>{
    console.log("port 5000");
})
