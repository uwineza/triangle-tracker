function myTriangle() {
  var side1 = parseInt(document.getElementById("side1").value);
  var side2 = parseInt(document.getElementById("side2").value);
  var side3 = parseInt(document.getElementById("side3").value);
  var triangle = [side1, side2, side3];
  console.log(triangle);
  alert(triangle);
  var result1 = side1 + side2;
  var result2 = side1 + side3;
  var result3 = side2 + side3;
  if(result1 > side3 &&
    result2 > side2 &&
    result3 > side1){
   if (side1 === side2 && side1 === side3) {
    console.log("Triangle is Equilateral");
    alert("Triangle is Equilateral");
   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Triangle is isoscele");
    alert("Triangle is isoscele")
  } else 
  ) {
    console.log("Triangle is Scalene");
    alert("Triangle is Scalene");
    }
  };
  else{
  console.log("Triagle can not be formed");
  alert("Triagle can not be formed");
};
};