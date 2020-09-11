var farn=parseFloat( prompt("Enter the Fahrenheit  temp. : ") );
var cels=parseFloat(prompt("Enter the Celsius temp : ") ) ;
celcius=(farn-32)*(5/9);
farenheit=(cels*(9/5))+32;
document.write("Fahrenheit  to Celcius : "+ celcius+"<br/>");
document.write("Celsius to Fahrenheit : "+ farn+"<br/>");
