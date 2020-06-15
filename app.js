

////////////////////////////////////////////////////////Chapter1////////////////////////////////////////////////////////

 /*                                                                                   
//task1//
alert("Welcome to our website!");
*/

/*
//task2//
alert("Error! Please enter a valid password");
*/

/*
//task3//
alert("Welcome to JS Land... \n Happy Coding");
*/

/*
//task4//
alert("Welcome to JS Land...");
alert("Happy Coding");
*/


/*
//task5//
console.log("Hello i can run JS through my web browser's console");
/*



//task6//

//task7//




////////////////////////////////////////////////////////Chapter2////////////////////////////////////////////////////////
  /*                                                                                  
//task1//
var username;
*/

/* 
//task2//
var myname="Fahad Ahmed";
*/

/*
//task3//
var message="Hello World";
alert(message);
*/

/*
//task4//
var name="John Doe";
var age=15;
var course="Certified Mobile Application Development";
alert(name);
alert(age + "years old");
alert(course);
*/


/*
//task5//                                          
alert( "PIZZA\nPIZZ\nPIZ\nPI\nP");
*/

/*
//task6//                                          
var email="fahadahmed1086@gmail.com";
alert("My email address is" + email);
*/

/*
//task7//
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book"+ book);
*/

/*
//task8//
document.write("Yah! I can write HTML content through JavaScript");
*/

/*
//task9//                                          
alert( "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
*/



////////////////////////////////////////////////////////Chapter3////////////////////////////////////////////////////////
  /*                                                                                  
//task1//
var age=15;
alert("I am " + age + "years old");
*/

/*
//task2//
window.onload = function() {
    localStorage.setItem('count', parseInt(localStorage.getItem('count'), 10)+1);
};
var visitCount = localStorage.getItem('count') || 1
var visitCount = localStorage.setItem('count', visitCount)
alert("You have visited this page " + localStorage.getItem('count') + "times")
*/


/*
//task3//
var birthyear=1990;
document.write("My Birthyear is"+ birthyear + "<br\>Data type of my declared variable is number");
*/

/*
//task4//
var name="John Doe";
var product="T-shirt";
var quantity=5;
document.write("<br\><br\>John Doe ordered " +quantity + product + " on XYZ clothing store");
*/

////////////////////////////////////////////////////////Chapter4////////////////////////////////////////////////////////

/*
//task1//
var numbers;
var letter;
var keywords;
var sensitive;
var name;
var $name;
var _name;
var $my;
var _1stVariable;
var $myname;

document.write("<h3>Rules for naming JS variables</h3>");
document.write("Variable name can only contain numbers,$ and _.For example: $my_1stVariable <br\> Variable must begin with a letter,$ or _.For example: $name,_name or name. <br\> Variables names are case sensitive <br\> Variable names should not be JS keywords");
*/


////////////////////////////////////////////////////////Chapter5////////////////////////////////////////////////////////
/*
//task1//
var num1=3;
var num2=5;
var sum=num1 + num2;
document.write("<br\><br\>Sum of " + num1 + "and" + num2 + "is"  + sum);
*/

/*
//task2//
var subtraction=num1 - num2;
document.write("<br\>Subtraction of " + num1 + "and" + num2 + "is"  + subtraction);
var multiplication=num1 * num2;
document.write("<br\>Multiplication of " + num1 + "and" + num2 + "is"  + multiplication);
var division=num1 / num2;
document.write("<br\>Division of " + num1 + "and" + num2 + "is"  + division);
var modulus=num1 % num2;
document.write("<br\>Modulus of " + num1 + "and" + num2 + "is"  + modulus);
*/


/*
//task3//

var num;
document.write("<br\><br\>Value after variable declaration is" + num);
num=5;
document.write("<br\>Initial value: " + num);
num=num+1;
document.write("<br\>Value after increment is : " + num);
num=num+6;
document.write("<br\>Value after addition is : " + num);
num=num-1;
document.write("<br\>Value after decrement is : " + num);
num=num / 3;
document.write("<br\>The remainder is "+ num);
*/


/*
//task4//

var costOfTicket=600;
var noOfTickets=5;
var total=costOfTicket * noOfTickets;
document.write("<br\><br\>Total cost to buy "+ noOfTickets +" tickets to a movie is "+ total + "PKR <br\>");
*/


/*
//task5//

var num=prompt("Enter a number to show its multiplication table");
document.write("Table of "+num+"<br\>");
for(var j=1;j<=10;j++)
document.write(num+"x"+j+"="+num*j +"<br\>");
*/





/*
//task6//

var c=25;
var celcius=(f-32)*5/9;
var f=70;
var fahrenheit=(c*9/5)+32;
document.write(c + "C is " + fahrenheit + "F <br\>");
document.write(f + "F is " + celcius + "C");
*/


/*
//task7//

var priceOfItem1=650;
var priceOfItem2=100;
var quantityOfItem1=3;
var quantityOfItem2=7;
var shippingCharges=100;
var total=priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges;
document.write("<br\><br\>Price of item 1 is "+ priceOfItem1);
document.write("<br\>Quantity of item 1 is "+ quantityOfItem1);
document.write("<br\>Price of item 2 is "+ priceOfItem2);
document.write("<br\>Quantity of item 2 is "+ quantityOfItem2);
document.write("<br\>Shipping charges" + shippingCharges);
document.write("<br\>Total cost of your order is " + total);
*/

/*
//task8//

var totalMarks=980;
var marksObtained=804;
var percentage=marksObtained/totalMarks *100;
document.write("<br\><br\>Total Marks: "+ totalMarks);
document.write("<br\>Marks obtained: "+ marksObtained);
document.write("<br\>Percentage: "+ percentage +"%");
*/

/*
//task9//

var usDollars=10;
var saudiRiyals=25;
var total=usDollars*104.80 + saudiRiyals* 28;
document.write("<br\><br\><h2>Currency in PKR</h2>");
document.write("<br\>Total currency in PKR: " + total);
*/

/*
//task10//

var num=5;
num=num+5;num=num*10;num=num/2;
document.write("<br\><br\>" + num);
*/

/*
//task11//

var currentYear=2016;
var birthYear=1992;
var age=currentYear-birthYear;
document.write("<br\><br\>Current Year:" + currentYear );
document.write("<br\>Birth Year:" + birthYear );
document.write("<br\>Your Age:" + age );
*/

/*
//task12//

var r=20;
var c=2*3.142*r;
var a=3.142*(r*r);
document.write("<br\><br\>Radius of a circle is: " + r);
document.write("<br\>The circumference is: " + c);
document.write("<br\>The area is: " + a);
*/

/*
//task13//

var favSnack="chocolate chip";
var currentAge=15;
var maxAge=65;
var amountPerDay=3;
var total=(maxAge-currentAge)*amountPerDay;
document.write("<br\><br\>Favourite snack: "+ favSnack);
document.write("<br\>Current age: "+ currentAge);
document.write("<br\>Estimated Maximum age: "+ maxAge);
document.write("<br\>Amount of snacks per day: "+ amountPerDay);
document.write("<br\>You will need " + total + favSnack + " to last you until the ripe old age of " + maxAge);
*/



////////////////////////////////////////////////////////Chapter6-9////////////////////////////////////////////////////////
  /*                                                                         
//task1//
var a=10;
document.write("<br\><br\>Result");
document.write("<br\>The value of a is:" + a);

++a;
document.write("<br\>the value of ++a is: "+ ++a);
document.write("<br\>Now the value of a is: "+ a);

a++;
document.write("<br\>the value of a++ is: " +  a++);
document.write("<br\>Now the value of a is: "+ a);

--a;
document.write("<br\>the value of --a is: "+ --a);
document.write("<br\>Now the value of a is: "+ a);

a--;
document.write("<br\>the value of a-- is: "+ a--);
document.write("<br\>Now the value of a is: "+ a);
*/


 /* 
//task2//
*/

/*
//task3//
var name=prompt("Enter your name");
alert("Thanks! "+name);
*/


/*
//task5//
*/

/*
//task6//
*/

////////////////////////////////////////////////////////Chapter9-11////////////////////////////////////////////////////////
/*                                                                                    
//task1//
var city=prompt("Enter city name");
if(city =="Karachi"){
    alert("Welcome to city of lights");
}
*/

/* 
//task2//
var gender=prompt("Enter your gender");
if(gender =="male"){
    alert("Good Morning Sir");
}
if(gender =="female"){
    alert("Good Morning Ma'am");
}
*/

/* 
//task4//
var fuel=prompt("Enter remaining fuel in  car");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
*/

/*
//task5//
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }
        
*/


/*
//task6//
*/

/*
//task7//
var num=5;
var guess=prompt("Guess the secret number");
if(guess == num){
    alert("Bingo! Correct Answer");
}

if(guess == ++num){
    alert("Close enough to the correct answer");
}
*/

/*
//task8//
*/

/*
//task9//
var x=prompt("Enter number");
if (x % 2 === 0) {
    alert("Even");
}
else {
    alert("Odd");
}
*/



/*
//task10//
var t=prompt("Enter temperature");
if(t>40){
    alert("It is too hot outside.");
}
else if(t>30){
    alert("The Weather today is Normal.");
}
else if(t>20){
    alert("Today’s Weather is cool.");
}
else if(t>10){
    alert("OMG! Today’s weather is so Cool.");
}
*/



/*
//task11//
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");

var sum=num1+num2;
document.write("<br\><br\>Sum of " + num1 + " and " + num2 + " is "  + sum);
var subtraction=num1 - num2;
document.write("<br\>Subtraction of " + num1 + " and " + num2 + "is "  + subtraction);
var multiplication=num1 * num2; 
document.write("<br\>Multiplication of " + num1 + " and " + num2 + " is "  + multiplication);
var division=num1 / num2;
document.write("<br\>Division of " + num1 + " and " + num2 + "is "  + division);
var modulus=num1 % num2;
document.write("<br\>Modulus of " + num1 + " and " + num2 + " is "  + modulus);
*/

////////////////////////////////////////////////////////Chapter12-13////////////////////////////////////////////////////////
 /*                                                                           
//task1//
*/

/*
//task2//
var num1=prompt("Enter first number");
var num2=prompt("Enter second number");
if(num1>num2){
    alert(num1);
}
if(num2>num1){
    alert(num2);
}
if(num1 == num2){
    alert("They are equal");
}
*/

/*
//task3//
var num=prompt("Enter any number");
if(num>0){
    alert("The number is positive");
}
if(num<0){
    alert("The number is negative");
}
if(num == 0){
    alert("The number is zero");
}
*/


/*
//task4//
var char=prompt("Enter any character");
if(char == "a") {
    alert("True");
}
else if(char == "e") {
    alert("True");
}
else if(char == "i") {
    alert("True");
}
else if(char == "o") {
    alert("True");
}
else if(char == "u") {
    alert("True");
}
else{
    alert("False");
}
*/

/*
//task5//
var pw="helloworld";
var password=prompt("Enter password");
if(password==pw){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}
*/


/*
//task6//
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
*/


/* 
//task7//
var t=prompt("Enter time");
time=t;
if(time >= 0000 && time<1200){
    alert("Good Morning");
}
else if(time >= 1200 && time<1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time<2100){
    alert("Good Evening");
}
else if(time >= 2100 && time<2359){
    alert("Good Night");
}
*/










 
 ////////////////////////////////////////////////////////Chapter14-16////////////////////////////////////////////////////////
/*                                                                            
//task1//
var names = [];
*/

/*
//task2//
*/

/*
//task3//
var alphabets=["a","b","c","d"];
*/


/*
//task4//
var numbers=[1,2,3,4,];
*/

/*
//task5//
*/

/*
//task6//
var mixedArray = [4, "Fahad", "Hello World", true];
*/

/*
//task7//
var qualifications=["1)SSC <br\>", "2)HSC<br\>", "3)BCS<br\>","4)BS<br\>", "5)BCOM<br\>", "6)MS<br\>", "7)M. Phil<br\>","8)PhD<br\>"]; 
document.write("<h3>Qualifications:<h3/>");  
document.write(qualifications);   
*/

/*
//task8//
var names=["Michael","John","Tony"];
var scores=[320,230,480];
var total=500;
var percentageM=scores[0]/500*100;
var percentageJ=scores[1]/500*100;
var percentageT=scores[2]/500*100;

document.write("<br\><br\>Score of "+ names[0] + " is " + scores[0] + " Percentage: " + percentageM + "%" );
document.write("<br\>Score of "+ names[1] + " is " + scores[1] + " Percentage: " + percentageJ + "%");
document.write("<br\>Score of "+ names[2] + " is " + scores[2] + " Percentage: " + percentageT + "%<br\>");
*/

/*
//task9//
var colors=["Red","Green","Blue","Orange","Purple","Yellow"];
*/


/*
//task10//
var scores=[320,230,480,120];
*/


/*
//task11//
var cities=["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
var selectedCities=["Karachi","Islamabad","Lahore"];
*/

/*
//task12//
var arr =["This","is" ," my","cat"];
document.write(arr);
*/

/*
//task13//
*/

/*
//task14//
*/

/*
//task15//
var manufacturers=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
*/

 /////////////////////////////////////////////////////////////Chapter17-20/////////////////////////////////////////////////////
 /*                                                                       
//task1//
*/

/*
//task2//
*/

/*
//task3//
for (var i = 1; i <= 10; i++) {
    document.write(i);
   }
*/

/*
//task4//
var num=prompt("Enter a number to show its multiplication table");
var length=prompt("Enter length of multiplication table");
document.write("Multiplication table of "+num+"<br\>");
document.write("Length "+length+"<br\>");

for(var j=1;j<=length;j++)
document.write(num+"x"+j+"="+num*j +"<br\>");
*/



/*
//task5//
var fruits=["apple","banana","mango","orange","strawberry"];
 
    document.write(fruits);
*/

/*
//task6//
document.write("<br\><br\> a.Counting:<br\> ")
for(var count=1;count<=10;count++){
    document.write(count);
}
document.write("<br\> b.Reverse Counting: <br\>")
for(var count=10;count<=1;count--){
    document.write(count);
}

document.write("<br\> c.Even: <br\>")
for(var count=0;count<=20;count=count+2){
    document.write(count);
}
document.write("<br\> c.Odd:<br\> ")
for(var count=1;count<=19;count=count+2){
    document.write(count);
}
*/


/*
//task7//
var A=["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
if(search == "cake"){
    alert(search+" is available in our bakery");
}
else if(search == "apple pie"){
    alert(search+" is available in our bakery");
}
else if(search == "cookie"){
    alert(search+" is available in our bakery");
}
else if(search == "chips"){
    alert(search+" is available in our bakery");
}
else if(search == "patties"){
    alert(search+" is available in our bakery");
}
else if(search == ""){
    alert("Please order something");
}
else{
    alert("We are sorry"+search+" is not available in our bakery");
}
*/



/*
//task8//
var A=[24,53,78,91,12];
*/

/*
//task9//
var A=[24,53,78,91,12];
*/


/*
//task10//
*/