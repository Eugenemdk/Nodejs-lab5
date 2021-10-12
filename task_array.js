
module.exports.getSum=function(){
	var numarray=new Array(10);


for(var i=0;i<numarray.length;i++){
	numarray[i]=Math.floor(Math.random() * 30);
}

for(var i=0;i<numarray.length;i++){
	console.log(numarray[i]+" ");
}

var save1;
var save2;
var sum=0;

	var count=0;
	var save1;
	var save2;
	if(numarray[i]==0){
		count++;
		save1=i;
		save2=save1;
		save1=0; 

	}
	if(count==2){
		for(var j=save1;j<=save2;j++){
			sum+=numarray[j];
			
		}
	console.log(sum);
	}
	else{
		console.log(0);
	}
}
