var soap = require('soap');
var test = require("./test");
var xml2js = require('xml2js');
var num = test.test

var parseString = xml2js.parseString;
//console.log((num)());
var url = 'http://211.87.227.120:6096/platformData/services/EnterpriseService?wsdl';
//var url = "http://211.87.227.120:8080/platformData?wsdl"
var args = {
	arg1: '123451004',//EnterpriseID
	//arg2: '供应关系',
	//arg3: 'TO',
};

var arg2 = {
	a: "123451004",
	b: 1,//用"1"或者1都可以
}
var arg3 = {};
soap.createClient(url, function(err, client) {
	//console.log(client);
	
	client.getEnterpriseInfoById(args, function(err, result) {
		if(err){
			//console.log("error occoured");
			return;
		} 

		console.log(result.out);
		console.log("");
		parseString(result.out, function(err, result){
			if(err) return;
			console.log(result.Msg.Body);
		});
	});

	// client.getProductsByEnterpriseId(args, function(err, result){
	// 	if(err){
	// 		console.log("error occoured");
	// 		return;
	// 	}

	// 	console.log(result);
	// 	console.log("this is products");
	// 	console.log("");
	// });

	// client.getPartnersByEnterpriseId(args, function(err, result){
	// 	if(err) {
	// 		console.log("error occoured");
	// 		return;
	// 	}

	// 	console.log(result);
	// 	console.log("this is Partners");
	// 	console.log("");
	// });

	
	// client.getRelationApply(arg2, function(err, result){
	// 	if(err){
	// 		console.log("error occoured");
	// 		return;
	// 	}

	// 	console.log(result);
	// 	console.log("this is Apply");
	// 	console.log("");
	// })

});

// var url2 = "http://211.87.227.120:6096/platformData/services/ProductService?wsdl"

// soap.createClient(url2, function(err,client){
// 	if(err){
// 		console.log("client error");
// 	}
// })

