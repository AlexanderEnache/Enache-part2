

var eventType = prompt("What event will you be going to??");
var tempFahr  = prompt("Hows the temperature outside??");
var result    = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear ";

if(eventType == "casual"){
	
	result = result + "something comfy ";
	
}else if(eventType == "semi-formal"){
	
	result = result + "a polo ";
	
}else{
	
	result = result + "a suit ";
	
}

	
	result = result + "and ";


if(tempFahr < 54){
	
	result = result + "a coat.";
	
}else if(tempFahr >= 54 && tempFahr <= 70){
	
	result = result + "a jacket.";
	
}else{
	
	result = result + "no jacket.";
	
}

alert(result);


