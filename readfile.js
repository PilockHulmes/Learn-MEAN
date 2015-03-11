var fs = require('fs');
fs.readFile('file.txt', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
})

console.log("");

fs.readFile('file.txt', 'UTF-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
})