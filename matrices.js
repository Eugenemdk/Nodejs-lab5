global.matrix=new Array(6);

for(var i=0;i<matrix.length;i++){
	matrix[i]=new Array(6);
}

for(var i=0;i<matrix.length;i++){
	for(var j=0;j<matrix.length;j++){
		matrix[i][j]=Math.floor(Math.random() * 30);
	}
} 
module.exports.getMatrix=function(){
console.table(matrix);
}
module.exports.findBiggestColumn=function(){
	var multCols=[1,1,1,1,1,1];
	
	for(var j=0;j<matrix.length;j++){
		for(var i=0;i<matrix[j].length;i++){
			multCols[i]*=matrix[j][i];
		}
	}

	console.log(multCols);
	console.log("Biggest multiplication of elements is : "+ Math.max.apply(null,multCols));
}
var matrixmap=new Map();
var setKeys=new Set();
var setValues=new Set();
module.exports.orderMatrixByColumn=function(){
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function getByValue(map,searchValue){
	for(let[key,value] of map.entries()){
		if(value===searchValue)
			return key
	}
}
	
	for(var i=0;i<matrix.length;i++){
		matrixmap.set(i,matrix[0][i]);
	}


	matrixmap.forEach((value,key)=>{
		console.log(value+" key is: "+key);
		setKeys.add(key);
		setValues.add(value);
	})
	/*console.log(Array.from(setValues).sort(function(a,b){
		return a-b;
	}));
	*/
var arrayValues=Array.from(setValues).sort(function(a,b){
		return a-b;
	});
console.log(arrayValues);
for(var i=0;i<matrix.length;i++){
	if(matrixmap.has(arrayValues[i])){
		for(var j=0;j<matrix.length;j++){
			var x=matrix[j][i];
			matrix[j][i]=matrix[j][getByValue(matrixmap,arrayValues[i])];
			matrix[j][getByValue(matrixmap,arrayValues[i])]=x;
			
		}
		
	}

}
console.table(matrix);
}

function deleteRow(arr, row) {
   arr = arr.slice(0); // make copy
   arr.splice(row - 1, 1);
   return arr;
}
var matrixmap_first=new Map();
var matrixmap_second=new Map();
var matrixmap_third=new Map();
var matrixmap_fourth=new Map();
var matrixmap_fifth=new Map();
var matrixmap_sixth=new Map();

for(var i=0;i<matrix.length;i++){
		matrixmap_first.set(i,matrix[0][i]);
	}
for(var i=0;i<matrix.length;i++){
		matrixmap_second.set(i,matrix[1][i]);
	}
for(var i=0;i<matrix.length;i++){
		matrixmap_third.set(i,matrix[2][i]);
	}
for(var i=0;i<matrix.length;i++){
		matrixmap_fourth.set(i,matrix[3][i]);
	}
for(var i=0;i<matrix.length;i++){
		matrixmap_fifth.set(i,matrix[4][i]);
	}
for(var i=0;i<matrix.length;i++){
		matrixmap_sixth.set(i,matrix[5][i]);
	}
array_first=Array.from(matrixmap_first.values());

module.exports.deleteDuplicates=function(){
const toFindDuplicates = array_first => array_first.filter((item, index) => array_first.indexOf(item) !== index)
const duplicateElementa = toFindDuplicates(array_first);
console.log(duplicateElementa);
if(duplicateElementa.length==0){
	deleteRow(matrix,1);
	console.table(matrix);
}
}

