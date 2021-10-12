const http=require("http");
const os=require("os");
const greeting=require("./greetings");
const User=require("./user.js");
const wilkommen=require("./welcome");
const matrix=require("./matrices.js");
const task=require("./task_array.js");
const example=require("./oop_classes_objects.js");
http.createServer(function(request,response) {
	// body...
	response.end("Hallo Nodejs");
}).listen(3000,"127.0.0.1",function() {
	console.log("Server started listening of request on port 3000");
})
/*
global.name="Eugen";
global.console.log(date);
console.log(greeting.getMessage(name));
let eugen=new User("Eugen",32);
eugen.sayHallo();
let userName=os.userInfo().username;
console.log(greeting.getMessage(userName));

wilkommen.erhaltenMorgenMessage();
wilkommen.erhaltenAbendMessage();
*/

/*
let nodePath=process.argv[0];
let appPath=process.argv[1];
let vorname=process.argv[2];
let alter=process.argv[3];

console.log("nodePath: "+ nodePath);
console.log("appPath: "+ appPath);
console.log("vorname: "+ vorname);
console.log("alter: "+ alter);
*/

//task1
/*
matrix.getMatrix();
matrix.findBiggestColumn();
matrix.orderMatrixByColumn();
matrix.deleteDuplicates();
*/

//task2
//task.getSum();

//lab3 
//example.worker_example();
//example.tour_example();

//lab4
//task1
/*
const prompt = require('prompt-sync')();
const fio = prompt('What is your name and surname?');
var regexp_pattern=/\w\s\w/;
var names=new Set();
names.add("Peter Johnson");
names.add("Robert Krawchzyk");
names.add("Roman Gontyuk");
for(let name of names){
	if(name.search(regexp_pattern)==-1){
			console.log("Sorry you are not in list");
	}else {
	console.log(`${name} is similar to fio`);
	}
}
*/
//task2
/*
const prompt = require('prompt-sync')();
const word = prompt('What is your word?');
var regexp_pattern=/\d/g;
var ch_array=word.split('');
console.log(ch_array);
var digits=new Set();
var desired=word.replace(regexp_pattern,'');
console.log(desired);
*/
//task3
/*
const prompt = require('prompt-sync')();
const fio = prompt('What is your name and surname?');
var regexp_pattern=/\w[^\d]\s[^\d]\w/;
	if(fio.match(regexp_pattern)){
			console.log("Everything is correct");
	}else {
	console.log("Sorry your credentials are not correct");
	}
	*/

//task4
/*
const prompt=require('prompt-sync')();
var regexp_pattern=/\d(.|,)\d/g;
const number = prompt('What is your number?');
if(number.match(regexp_pattern)){
console.log("It's a number");
} else{
console.log("It's not a number");
}
*/

//task5 
/*
const prompt=require('prompt-sync')();
const path = prompt('What is your path?');
var desired_path=path.split(/[\W]/g);
console.log(desired_path);
var folders=new Set();
for(var i=0;i<desired_path.length;i++){
	folders.add(desired_path[i]);
}
	console.log("Folders path to file is: ");
for(folder of folders){
	console.log(folder+" =>");
}
*/

//task6
/*
const prompt=require('prompt-sync')();
const phone = prompt('What is your telefonummer?');
var regexp_pattern=/^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/;
if(phone.match(regexp_pattern)){
	console.log("Telefonummer is correct")
}else{
	console.log("Telefonummer is incorrect")
}
*/
//task7
/*
const prompt=require('prompt-sync')();
const satz = prompt('Ergänzen sie das Satz: ');
var regexp_pattern=/[\w]{15,}/;
var regexp_sec_pattern=/\bPlanung/;
var desired_satz=satz.split(' ');
//console.log(desired_satz);
for(var i=0;i<desired_satz.length;i++){
	//console.log(desired_satz[i]+" ");
	if(desired_satz[i].match(regexp_pattern)){
		console.log(desired_satz[i]+" match a pattern");
		var desired_word=desired_satz[i].replace(regexp_sec_pattern,"...");
		console.log(desired_word);
	}
	else{
		console.log(desired_satz[i]+" doesn't match a pattern");
	}
}
*/

//module task
