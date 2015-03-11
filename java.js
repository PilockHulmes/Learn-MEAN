var java = require('java');
//java.classpath.push('commons-lang3-3.1.jar');
//java.classpath.push('commons-io.jar');
java.classpath.push("./");
java.classpath.push("http://localhost:8080/nodeimportjava/route/path/GetCsv.class");




var GetCsv = java.import("GetCsv");


var test = new GetCsv();

console.log('changed2');
test.TestOutPut("test1",function(err,result){
	console.log(result);
});
console.log(test.TestOutPutSync("test2"));
console.log("end");