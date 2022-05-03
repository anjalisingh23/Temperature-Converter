let cel= document.getElementById("cel");
let far=document.getElementById("far");
cel.addEventListener('input',Celsius);
function Celsius(){
	let c = this.value;
	let f= (c*(9/5))+32;
	far.value=f;
	//cel.innerText=f;
	//console.log("cel changed")
}
far.addEventListener('input',Faren)
function Faren(){
	let f = this.value;
	let c= (f-32)*(5/9);
	cel.value= c;
	//far.innerText=c;
	//console.log("fah changed")
}