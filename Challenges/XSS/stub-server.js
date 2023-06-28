//Beginning of custom code
var http = require('http');
var formidable = require('formidable');
const util = require("util");



//
const def_head_html = "<!DOCTYPE html><html><head><title>WASM - Useful feedback</title></head>"

const def_body_start = "<body><link rel='stylesheet' property='stylesheet' id='s' type='text/css' href='/template/s.css' media='all' /><h1>WASM - Challenge</h1><br>"
	
const def_body = "<h3>Hey, welcome to my super f-a-s-t CALCULATOR website.</h3>\n<h4>The calculations are done via WASM so it's super duper fast, also I keep a history of the calculations made by everyone.</h4>\n<h4>My code is open source : visit <a download='source.c' href='/source'>SOURCE</a></h4><br><br><h4>I also secured the input fields against XSS because someome hacked every user</h4>"
const def_body_end = "</body></html>"

var def_user_defined = "";



const calc = cwrap('super_fast_calculator','string',['int','string','int']);


function read_user_input(body,callback){
	var mess;

	try {
		var ret = calc(parseInt(body.value1), body.operator, parseInt(body.value2));
		let date = new Date();
		def_user_defined += date + " | " + ret
		def_user_defined += "<br>"
		mess = "Successful operation : "+ret;
	}
	catch (e) {
		console.log(e);
		mess = "You crashed my c code ... : \n"+e;
	}

	callback(null,mess);
}

http.createServer(function (req, res) {
	switch (req.url){
		case '/source':
			var file = fs.statSync('./RCE.c');
			res.writeHead(200, {'Content-Type':'text/plain', 'Content-Length':file.size});
			var readStream = fs.createReadStream('./RCE.c');
			readStream.pipe(res);
			break;
		case '/template/s.css':
			res.writeHead(200, {"Content-Type":"text/css"});
			fs.readFile('./template/s.css',function(err,data){
				if (!err){
					res.write(data);
				}
				res.end();
			});
			break;
		case '/modify':
			if (req.method != "POST"){	
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write("404");
				res.end();
				break;
			}
			var form = new formidable.IncomingForm();
			form.parse(req, function (err, fields, files) {
				console.log(fields);
				if(fields.operator == undefined
				 		|| fields.value1 == undefined
				 		|| fields.value2 == undefined){
					res.write('Transfer problem');
					res.end();
				}
				else{
					read_user_input(fields, function(err, result){
						if(err){
							res.write(err);
							res.end();
						}
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.write(def_head_html);
						res.write(def_body_start);
						res.write(result);
						res.write("<h4>Back to the calculator : <a href='/'>CALCULATOR</a></h4>");
						res.end();
					});
				}
			});
			break;
		case '/' :
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(def_head_html);
			res.write(def_body_start);
			res.write(def_body);

			res.write('<form action="/modify" method="post">');
			res.write('<input type="text" name="value1"><br>');


			res.write('<input type="radio" id="plus" name="operator" value="plus">');
			res.write('<label for="plus">PLUS</label><br>');
			res.write('<input type="radio" id="minus" name="operator" value="minus">');
			res.write('<label for="minus">MINUS</label><br>');
			
			res.write('<input type="text" name="value2"><br>');
			res.write('<input type="submit" value="Submit new text">');
			res.write('</form>');


			res.write(def_user_defined);
			
			res.write(def_body_end);
			return res.end();
			break;
		default:
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write("404");
			res.end();
			break;
	}
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
