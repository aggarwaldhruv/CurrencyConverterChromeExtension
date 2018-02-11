// Function to check for letters and length = 3
function isValidValues(fromCcy , toCcy)
{
 var letterNumber = /^([a-zA-Z]){3,3}$/;
 if(fromCcy.match(letterNumber) && toCcy.match(letterNumber)){
   return true;
 }else{ 
	 document.getElementById("result").style.color = "red";
	 document.getElementById("result").innerHTML = "Invalid input";
	  return false;
   }
}

//Function to process the response if received
function processResponse(xhttp) {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	var json = JSON.parse(xhttp.responseText);
    	var rate = Object.keys(json.rates)
    	if(rate[0]){
    		// If everthing is as expected and currency is converted
    		document.getElementById("result").innerHTML = "Conversion Rate <br> 1 "+document.getElementById("fromCcy").value.toUpperCase() + " = " + json.rates[rate] +" "+ rate;
    	}else{
    		document.getElementById("result").style.color = "red";
    		document.getElementById("result").innerHTML = "To Currency is not valid value."
    	}
      } else if(xhttp.readyState == 4 ) {
    	  // In case response is 200 but some error occured at server while converting
    	  var json = JSON.parse(xhttp.responseText);
    	  var response = json.error;
    	  document.getElementById("result").style.color = "red";
    	  document.getElementById("result").innerHTML = response;
      }
      ajax = null;
    };

//Function to load element and send request and call other methods.
window.onload=function(){
	document.getElementById("submit").addEventListener("click",() => {
		
		//Values from Input are converted to uppercase
		var fromCcy = document.getElementById("fromCcy").value.toUpperCase();
		var toCcy = document.getElementById("toCcy").value.toUpperCase();
		if(!isValidValues(fromCcy , toCcy)){
			return ;
		}
		
		var url = "https://api.fixer.io/latest?base="+fromCcy +"&symbols=" + toCcy  ;
		var ajax;
		if (window.XMLHttpRequest) {
		    // code for modern browsers
			ajax = new XMLHttpRequest();
		 } else {
		    // code for old IE browsers
			 ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		
		ajax.onreadystatechange = function(){processResponse(ajax)};
		ajax.onerror = function(){
			document.getElementById("result").style.color = "red";
			document.getElementById("result").innerHTML = "Some error occured while<br>fetching conversion rate"
		};
		ajax.open("GET", url);
		ajax.send();

	});
}

