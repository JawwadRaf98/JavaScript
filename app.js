//Chapter No 1

var land = "Welcome to JS Land...";
var happy = "Happy Coding";
alert("Greeting!")
alert("Error! Please enter a valid password.");
alert(land + "\n" + happy);
alert(land);
alert(happy);
//in console
alert("Hello... I can run JS through my web browser's console");

//Chapter No 2;

var username = "Jawwad";
var myName = "Jawwad Rafique Ahmed "
var message = "Hello World";
var age = 22;
var profession = "Certifies Mobile Application Developer";
var pizza = "Pizza";
var email = "jawwad.rafique007@gmail.com";
var book = "A smarter way to learn JavaScript";
var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"

alert("User Name : " + username);
alert("My name is : " + myName);
alert("I am " + age + " years old");
alert(profession);
alert(pizza + "\n" + pizza.slice(0, pizza.length - 1) + "\n" + pizza.slice(0, pizza.length - 2) + "\n" + pizza.slice(0, pizza.length - 3) + "\n" + pizza.slice(0, pizza.length - 4));
alert(email);
alert(book);
alert(design)


//Chapter no 3

var age = 22;
var birthYear = 1998;
var visitTime = 14;
var url = "www.xyzClothing.com";
var visitorName = "Jawwad Rafique Ahmed";
var quantity = 10;
alert("I am " + age + " year old");
alert("You have visit this site " + visitTime + " times")
document.write("My birth year is " + birthYear + "<br>The data type of variable 'birthYear' is Number<br><br><b>" + visitorName + "</b> ordered <b>" + quantity + " T-Shirts</b> on" + url);

//Chapter no 4

var jawwad, rafiue, ahmed;
document.write("<h1>Legal variable:</h1><br>");
document.write("'Jawwad', 'Variable1', '_Name','$name','var1','Ahmed'<br>");
document.write("<h1>Illegal variable:</h1><br>")
document.write("'-12', 'Variable 1' '1stName','@name','var+1','.name'<br>");
document.write("<h1>Rules for naming JS variables:</h1><br>");
document.write("Variable names can only contain letter, numbers, $ and _.<br>");
document.write("For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, _ or $. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS Keyword<br>");

//Chapter no 5

var num1 = prompt("Enter 1st  number;");
var num2 = prompt("Enter 1st  number;");
var result = Number(num1) + Number(num2);
document.write(Number(num1) + "+" + Number(num2) + "=" + result + "<br>");
result = Number(num1) - Number(num2);
document.write(Number(num1) + "-" + Number(num2) + "=" + result + "<br>");
result = Number(num1) * Number(num2);
document.write(Number(num1) + "*" + Number(num2) + "=" + result + "<br>");
result = Number(num1) / Number(num2);
document.write(Number(num1) + "/" + Number(num2) + "=" + result + "<br>");
result = Number(num1) % Number(num2);
document.write(Number(num1) + "%" + Number(num2) + "=" + result + " Modulus<br> ");

var newVar;

document.write("Value after valraible declaration is <b>" + newVar + "<b><br>");
newVar = 6;
document.write("Initial value: <b>" + newVar + "<b><br>");
var increment = newVar++;
document.write("Value after increment is <b>" + newVar + "<b><br>");
var addition = newVar + increment;
document.write("Value after addition is <b>" + addition + "<b><br>");
var decrement = addition - 1;
document.write("Value after decrement is <b>" + decrement + "<b><br>");
document.write("Value remainder is <b>" + newVar % newVar + "<b><br>");

var ticket = 600;
document.write("The Cost to buy 5 tickets to a movie is " + ticket * 5 + " PKR<br>");

var table = 4;
document.write("<b>Tabel of " + table + "</b><br>")
document.write(table + "X 1 =" + table * 1 + "<br>");
document.write(table + "X 2 =" + table * 2 + "<br>");
document.write(table + "X 3 =" + table * 3 + "<br>");
document.write(table + "X 4 =" + table * 4 + "<br>");
document.write(table + "X 5 =" + table * 5 + "<br>");
document.write(table + "X 6 =" + table * 6 + "<br>");
document.write(table + "X 7 =" + table * 7 + "<br>");
document.write(table + "X 8 =" + table * 8 + "<br>");
document.write(table + "X 9 =" + table * 9 + "<br>");
document.write(table + "X 10 =" + table * 10 + "<br>");


//Chapter no 6 to 9
//Task no 1
var a = parseInt(prompt("Enter number;"));
document.write("Result <br> The value of a is: " + a + "<br>.............................<br><br>");

document.write("The vallue of ++a is: " + ++a + "<br>");
document.write("Now the vallue of a is: " + a + "<br><br>");

document.write("The vallue of a++ is: " + a++ + "<br>");
document.write("Now the vallue of a is: " + a + "<br><br>");

document.write("The vallue of --a is: " + --a + "<br>");
document.write("Now the vallue of a is: " + a + "<br><br>");

document.write("The vallue of a-- is: " + a-- + "<br>");
document.write("Now the vallue of a is: " + a + "<br><br>");

//Task no 2

document.write("a is " + a + "<br>b is " + b + "<br>");
a = 2, b = 1;
document.write("--a is" + --a);
a = 2, b = 1;
document.write("<br> --a - --b is " + (--a - --b));
a = 2, b = 1;
document.write("<br> --a - --b + ++b is " + ((--a - --b) + ++b));
a = 2, b = 1;
document.write("<br> Result : --a - --b + ++b  + b-- is " + (((--a - --b) + ++b) + b--));

//Task no 3

var name = prompt("Enter your name:");
alert("Hello! \n" + name);

//Task no 5

var num = parseInt(prompt("Enter number: "));
if (!num) {
    for (var i = 1; i <= 10; i++) {
        document.write(5 + " X " + i + " = " + 5 * i + "<br>");
    }
}
else {
    for (var i = 1; i <= 10; i++) {
        document.write(num + " X " + i + " = " + num * i + "<br>");
    }
}
//Task no 6

var sub1 = prompt("Enter the name of first subject:");
var sub2 = prompt("Enter the name of second subject:");
var sub3 = prompt("Enter the name of third subject:");

var totalMarks = 100;

markSub1 = parseInt(prompt("Enter obtained marks for subject " + sub1));
markSub2 = parseInt(prompt("Enter obtained marks for subject " + sub2));
markSub3 = parseInt(prompt("Enter obtained marks for subject " + sub3));

document.write("<table>")

document.write("<tr><th>Subject </th><th>  Total Marks </th><th> Obtained Marks </th><th> Percentage </th></tr>")
document.write("<tr><td style = 'text-align:center'>" + sub1 + "</td><td style = 'text-align:center'>" + totalMarks + "</td><td style = 'text-align:center'>" + markSub1 + "</td><td style = 'text-align:center'>" + (Math.round((markSub1 / totalMarks) * 100)) + " %</td></tr>")
document.write("<tr><td style = 'text-align:center'>" + sub2 + "</td><td style = 'text-align:center'>" + totalMarks + "</td><td style = 'text-align:center'>" + markSub2 + "</td><td style = 'text-align:center'>" + (Math.round((markSub2 / totalMarks) * 100)) + " %</td></tr>")
document.write("<tr><td style = 'text-align:center'>" + sub3 + "</td><td style = 'text-align:center'>" + totalMarks + "</td><td style = 'text-align:center'>" + markSub3 + "</td><td style = 'text-align:center'>" + (Math.round((markSub3 / totalMarks) * 100)) + " %</td></tr>")
document.write("<tr><td style = 'text-align:center'></td><td style = 'text-align:center'>" + (totalMarks * 3) + "</td><td style = 'text-align:center'>" + (markSub1 + markSub2 + markSub3) + "</td><td style = 'text-align:center'>" + Math.round(((markSub1 + markSub2 + markSub3) / (3 * totalMarks)) * 100) + " %</td></tr>")
document.write("</table>")

//Chapter no 9 to 11

//Task no 1

var city = prompt("Enter the name of city ");
if (city.toUpperCase() === "KARACHI") {
    alert("Welcome to city of lights");
}
else {
    console.log("not a city of lights");
}

//Task no 2

var gender = prompt("Enter your gender");
if (gender.toUpperCase() === "MALE") {
    alert("Good Morning Sir");
}
else if (gender.toUpperCase() === "FEMALE") {
    alert("Good Morning Ma'am ");
}
else {
    console.log("other");
}

//Task no 3

var color = prompt("Enter the color name of traffic light to know the message of that light ");
if (color.toLowerCase() === 'red') {
    var red = 'Red';
    alert("Color : " + red + "\nMessage: Must Stop")
}
else if (color.toLowerCase() === 'green') {
    var red = 'Green';
    alert("Color : " + red + "\nMessage: Move Now")
}
else if (color.toLowerCase() === 'yellow') {
    var red = 'Yellow';
    alert("Color : " + red + "\nMessage: Ready to Move ")
}
else {
    alert("Not a part of Traffic Lights")
}

//Task no 4

var fuel = parseFloat(prompt("Please enter the remaining fuel in car"))
if (fuel < 0.25) {
    alert("Please refill the fuel in your car\n Fule: " + fuel + " Litre")
}
else {
    alert("Fule: " + fuel + " Litre");
}

//Task no 5 True/False
//a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
} //yes it is true

//b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
} //no it is not true

//c
var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }
//condition 2 & 4 is true

//d
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//yes it is true

//e
if (true) { alert("True"); } if (false) { alert("False"); }
// always true condition run

//f
if ("car" < "cat") { alert("car is smaller than cat"); }
//yes true

//Task no 6
var totalSub1 = parseInt(prompt("Please enter the total marks for Subject no 1"));
var obtSub1 = parseInt(prompt("Please enter the obtained marks for Subject no 1"));

var totalSub2 = parseInt(prompt("Please enter the total marks for Subject no 2"));
var obtSub2 = parseInt(prompt("Please enter the obtained marks for Subject no 2"));

var totalSub3 = parseInt(prompt("Please enter the total marks for Subject no 3"));
var obtSub3 = parseInt(prompt("Please enter the obtained marks for Subject no 3"));

var grade, percentage, total, obtained, remarks;

total = totalSub1 + totalSub2 + totalSub3;
obtained = obtSub1 + obtSub2 + obtSub3;
percentage = Math.round((obtained / total) * 100);
grade = "";
remarks = "";

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}


document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: " + total + "<br>");
document.write("Obtained Marks: " + obtained + "<br>");
document.write("Percentage: " + percentage + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

//Task ono 7
var num = 5;
var guessNum = parseInt(prompt("Enter the number: "));
if (guessNum === num) {
    alert("Bingo! Correct Answer")
}
else if (guessNum === num + 1 || guessNum === num - 1) {
    alert("Close Enough")
}
else {
    alert("Your guess is wrong!")
}

//Task no 8
var num = parseInt(prompt("Please enter the number to check divisiblity by 3"));
if (num % 3 === 0) {
    alert(num + " is divisible by 3")
}
else {
    alert(num + " is not divisible by 3")
}

//Task no 9
var num = parseInt(prompt("Please enter the number to check even or odd"));
if (num % 2 === 0) {
    alert(num + " is even")
}
else {
    alert(num + " is odd")
}

//Task no 10
var temp = parseInt(prompt("Enter Temperature"))
if (temp >= 40) {
    alert("It is too hot today!")
}
else if (temp >= 30) {
    alert("The Weather today is Normal.")
}
else if (temp >= 20) {
    alert("Today’s Weather is cool.")
}
else if (temp >= 10) {
    alert("OMG! Today’s weather is so Cool.")
}

//tast no 11
var firstNo = parseInt(prompt("Enter first number"));
var secondNo = parseInt(prompt("Enter second number"));
var operator = prompt("select operator '+', '-', '*', '/', '%'");
if (operator === '+') {
    result = firstNo + secondNo;
    alert(firstNo + " + " + secondNo + " = " + result)
}
else if (operator === '-') {
    result = firstNo - secondNo;
    alert(firstNo + " - " + secondNo + " = " + result)
}
else if (operator === '*') {
    result = firstNo * secondNo;
    alert(firstNo + " * " + secondNo + " = " + result)
}
else if (operator === '/') {
    result = firstNo / secondNo;
    alert(firstNo + " / " + secondNo + " = " + result)
}
else if (operator === '%') {
    result = firstNo % secondNo;
    alert(firstNo + " % " + secondNo + " = " + result)
}
else {
    alert("Wrong operator")
}

//Chapter no 11-12
//task1
var inputValue = prompt("Please enter :");
var check = inputValue.charCodeAt(0);

if (check >= 65 && check <= 90) {
    alert("Given input is 'String' and it is in Uppercase.");
}
else if (check >= 65 && check <= 122) {
    alert("Given input is 'String' and it is in Lowerccase.");
}
else if (check >= 48 && check <= 57) {
    alert("Given input is 'Number'");
}
else {
    alert("Given input is not a 'Number' nor a 'String'");
}

//task 2
var firstNo = parseInt(prompt("Please enter first number:"));
var secondNo = parseInt(prompt("Please enter first number:"));

if (firstNo > secondNo) {
    alert(firstNo + " is greater than " + secondNo);
}
else if (secondNo > firstNo) {
    alert(secondNo + " is greater than " + firstNo);
}
else {
    alert("Both numbers are equal");
}

//task3
var firstNo = parseInt(prompt("Please enter number:"));


if (firstNo >= 0) {
    alert(firstNo + " is positive");
}

else {
    alert(firstNo + " is negative");
}

//TASK NO 4
var inputValue = prompt("Please enter vowel:");
if (inputValue === "A" || inputValue === 'a' || inputValue === 'E' || inputValue === 'e' || inputValue === 'I' || inputValue === 'i' || inputValue === 'O' || inputValue === 'o' || inputValue === 'U' || inputValue === 'u') {
    alert("True it is vowel")
}
else {
    alert("False it is not vowel")

}

//Task no 5
var password = "bc180408671";
var confirmPassword = prompt("Please enter your password.");
if (confirmPassword === password) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password”");
}

//TAsk no 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


// chapter 14 -16
var studentLit = [];
var studentObj = new Array();
var stringArray = ["jawwad", "Rafique", "Ahmed"];
var numArray = [1, 2, 3, 4];
var booleanArray = [true, false, true];
var mixArray = [2, "December", 1998];
var qualification = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD']
document.write("<h3>Qualification in Pakistan</h3>");
document.write("<ol>");
for (var i = 0; i <= qualification.length - 1; i++) {
    document.write("<li>" + qualification[i] + "</li>");
}
document.write("</ol>")

var names = ['Jawwad', 'Rafique', 'Ahmed'];
var obtMarks = [321, 457, 392];

alert(names.length)
for (var j = 0; j < names.length; j++) {
    document.write("<h4>Score of " + names[j] + " is " + obtMarks[j] + ". Percentage :" + (obtMarks[j] / 500 * 100) + " %</h4>")
}



var color = ['red','yellow','green']
document.write('Color: '+color.join(", ")+" <br>")
//A
beginning = prompt("Enter color name to add at beginning");
color.unshift(beginning);
document.write('Updated color after adding at beginning:'+color.join(", ")+"<br>")
//B
end = prompt("Enter color name to add at end");
color.push(end)
document.write('Updated color after adding at end:'+color.join(", ")+"<br>")
//C
listColor = prompt("Enter color name to add two and more");
color.push(listColor)
document.write('Updated color after adding two or more:'+color.join(", ")+"<br>")
//D
color.shift()
document.write('Updated color after deleting first element of list:'+color.join(", ")+"<br>")
//E
color.pop()
document.write('Updated color after deleting last element of list:'+color.join(", ")+"<br>")
//F
var indexNum = parseInt(promt("please enter the index."))
var colorName = prompt("Enter color name")
color.splice(indexNum,0,colorName)
document.write('Updated color after adding element at index '+indexNum+' :'+color.join(", ")+"<br>")

var score = [124, 5345, 12342, 12124]
alert(score.sort(function (a, b) { return a - b }))

var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Faisalabad'];
var selectedCites = cities.slice(1, 4)
document.write("Cities: " + cities)
document.write("<br>Seleced Cities :" + selectedCites)

var arr = ['This', 'is', 'my', 'Cat'];
document.write("Array: " + arr)
document.write("<br>String :" + arr.join(" "))

var arrOFObj = ['keybord', 'mouse', 'printer', 'moniter']

for (i = 1; i <= 4; i++) {
    alert("out:\n" + arrOFObj.shift() + "\n Remains : " + arrOFObj)
}

var arrOFObj = ['keybord', 'mouse', 'printer', 'moniter']

for (i = 1; i <= 4; i++) {
    alert("out:\n" + arrOFObj.pop() + "\n Remains : " + arrOFObj)
}

var phone = ['Phone', 'Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write("<h1>Our Brand</h1><br><select>");
for (var i = 0; i <= phone.length - 1; i++) {
    document.write("<option>" + phone[i] + "</option>")
}
document.write("</select>")
