function Worker(name,department,phone,salary) {
this.name=name;
this.department=department;
this.phone=phone;
this.salary=salary;
this.showInfo=showInfo;
	function showInfo(){
	console.log(this.name+" ,"+this.department+" ,"+this.phone+" ,"+this.salary);
	}
}
function Tour(num_of_people,num_of_days,rate){
	this.num_of_people=num_of_people;
	this.num_of_days=num_of_days;
	this.rate=rate;
	this.tour_cost=tour_cost;
	this.showInfo=showInfo;
	function tour_cost(){
		return num_of_people*num_of_days*rate;
	}
	function showInfo(){
	console.log("Number of people in tour is: "+this.num_of_people+",number of days is: "+this.num_of_days+",rate is: "+this.rate+"tour cost is: "+this.tour_cost());
	}
}
module.exports.worker_example=function(){
var worker=new Worker("Eugene","Data Science","+44 99 907 900",5000);
Worker.prototype.adress="Maple Street,6";
worker.showInfo();
}

module.exports.tour_example=function(){
var turkeyTour=new Tour(25,7,0.25);
turkeyTour.showInfo();
}