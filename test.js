var num = 9;
var literal = '9';
if (num === literal) {
	console.log('Should not be here!!!');
}
exports.test = function(req,res){
	return num;
}