var side1=parseInt  (prompt("enter the value of side1"));
var side2=parseInt(prompt("enter the value of side2"));
var side3=parseInt(prompt("enter the value of side3"));
var triangle=[side1,side2,side3];
alert(triangle)
var result1=side1+side2;
var result2=side1+side3;
var result3=side2+side3;
if(side1===side2&&side1===side3){
  alert("Triangle is Equilateral");
}
else if (side1===side2||side1===side3||side2===side3){
  alert("Triangle is isoscele");
}
else if(side1!=side2 && side1!=side3 && side2!=side3 && result1>side3 && result2>side2 && result3>side1){
 alert("Triangle is Scalene");
}
else{
  alert("Triagle can not be formed");
}