// Chapter no 21-25

    // Task no 1

    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + " "+ lastName;
    alert("Welcome "+ fullName);
    
    //Task no 2

    var favMobile = prompt("Enter your favorite mobile model");
    var lenghtFavMobile = favMobile.length
        
    document.write("<h3>My favourite mobile: "+favMobile+ "<br>Lenght of string: "+lenghtFavMobile+"</h3")

    // Task no 3

    var word = "Pakistani";
    document.write("String: "+word+"<br> Index of 'n': "+word.indexOf('n'))

    // Task no 4

    var word = "Hello World";
    var lastIndexOfL = "";

    for(var i = 0; i<=word.length ; i++){
        if(word[i] === 'l'){
            lastIndexOfL = i;
        }
    }

    document.write("<h2>String: "+word+"<br>Last index of 'l': "+lastIndexOfL+"</h2>")
    
    // Task no 5
   
    var word = "Pakistani";
    var charAt3rd = word.charAt(3);

    document.write("<h2>String: "+word+"<br>Charcter at index 3rd: "+charAt3rd+"</h2>")

    // Task no 6

    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName.concat(" "+lastName)
    alert("Welcome "+ fullName);

    // Task no 7

    var city = "Hyderabad";
    cityAfterRepalcement = "";
    for(var i =0;i<= city.length;i++){
        if(city.slice(i,i+5) === 'Hyder'){
           cityAfterRepalcement = city.slice(0,i)+"Islam"+city.slice(i+5);
        }
    }
    document.write("<h3>City: "+city+"<br>City after replacement: "+cityAfterRepalcement+"</h3>");

    // Task no 8

    var message = "Ali and Sami are best friends. They play cricket and football together.";
    for(var i =0;i<= message.length;i++){
        if(message.slice(i,i+3) === 'and'){
           message = message.slice(0,i)+"&"+message.slice(i+3);
        }
    }
    alert(message);

    // Task no 9

    var number  = "472"
    document.write("Value: "+ number+ "<br>Type: "+typeof(number)+"<br>Value: "+Number(number)+"<br>Type: "+typeof(Number(number)));

    // Task no 10

    var userInput = prompt("Enter any word");
    document.write("User input: "+userInput+"<br>Tile case: "+userInput.toUpperCase());

    // Task no 11

    var userInput = prompt("Enter any word"); 
    var firstCharacter = userInput.charAt(0);
    document.write("User input: "+userInput+"<br>Tile case: "+firstCharacter.toUpperCase()+userInput.slice(1));

    // Task no 12

    var num = 35.36;
    var numToString = num.toString();
    document.write("Number: "+num+"<br>Result: "+numToString.replace(".",""))

    // Task no 13

    var userName = prompt("Enter your user name");
    var checking = true;

    for(var i = 0; i<= userName.length; i++){
        if(userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64){
            checking = false;
        }
    }
    if(checking){
        alert("Welcome "+userName);
    }
    else{
        alert("Please enter valid username");
    }

    // Task no 14

    A = ['cake', 'apple pie' ,'cookie', 'chips', 'patties'];
    var userPromt = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    var index = A.indexOf(userPromt.toLowerCase());
    if(index>=0){
        alert(A[index]+" is available at index "+ index +" in our bakery")
    }
    else{
        alert("We are sorry!. "+userPromt.toLowerCase()+" is not avaible in our bakery")
    }

    
    // Task no 15

    var password = prompt("Enter your password: ");
        var checkPassword = false
        if ((password.charCodeAt(0) >= 48) && (password.charCodeAt(0) <= 57)) {
            alert("Password can not begin with a number\nPlease enter a valid password.")
        }
        else if (password.length < 6) {
            alert("Password must contain at least 6 character\nPlease enter a valid password.")
        }
        else {
            for (var i = 0; i <= password.length - 1; i++) {
                if (((password.charCodeAt(i) >= 48) && (password.charCodeAt(i) <= 57)) || ((password.charCodeAt(i) >= 65) && (password.charCodeAt(i) <= 90)) || ((password.charCodeAt(i) >= 97) && (password.charCodeAt(i) <= 122))) {
                    checkPassword = true;
                }
                else {
                    checkPassword = false;
                    break;
                }
            }
            if (checkPassword) {
                alert("correct password")
            }
            else {
                alert("invalid password")
            }
        }

        // Task no 16

        var university = "University of Karachi";
        for(var i = 0; i<= university.length; i++){
            document.write(university[i]+"<br>");
        }

        // Task no 17

        var userInput = prompt("Please enter");
        document.write("User input: "+userInput+"<br>Last Character of input: "+userInput[userInput.length-1])

        // Task no 18

        var text = "The quick brown fox jumps over the lazy dog";
        var count = 0;

        for (var i = 0; i < text.length -1 ; i++) {
            if (text.slice(i, i + 3).toLowerCase() === "the") {
                count= count + 1;
            }
        }
        document.write("Text: "+text+"<br>There are "+count+" occurrences of word “the”")

// Chapter no 26-30

        // Task no 1
        var num = 3.45214
        document.write("Number: "+num+ "<br>");
        document.write("Round of value: "+Math.round(num)+ "<br>");
        document.write("Floor value: "+Math.floor(num)+ "<br>");
        document.write("Ceil value: "+Math.ceil(num)+ "<br>");

        // Task no 2
        var num = prompt("Enter Floating Number");
        num = parseFloat(num);
        document.write("Number: "+num+ "<br>");
        document.write("Round of value: "+Math.round(num)+ "<br>");
        document.write("Floor value: "+Math.floor(num)+ "<br>");
        document.write("Ceil value: "+Math.ceil(num)+ "<br>");

        // Task no 3
        var num = prompt("Enter number");
        num = parseInt(num);
        document.write("The absolute value of "+num+" is "+Math.abs(num))

        // Task no 4
        var num = Math.random()
        num = (( num * 100000000000000000)%6 )+ 1 
        document.write("Random dice value is: "+num);

        // Task no 5
        var num = Math.random();
        num = (( num * 100000000000000000) % 2 )+ 1 ;
        num = parseInt(num);        
        if(num == 1){
            document.write(num+"<br>Random coin value is: Tail");
        }
        else{
            document.write(num+"<br>Random coin value is: Head");
        }

        // Task no 6
        var num = Math.random();
        num = (( num * 100000000000000000) % 100 )+ 1 ;
        num = parseInt(num)
        document.write("Random number between 1 to 100 is: "+ num);

        // Task no 7

            // Confusion in Question

        // Task no 8
        var num = Math.random();
        num = (num * 10) + 1;
        console.log(num)
        var secNum = Math.floor(num);

        var userInput = Number(prompt("Enter number betweem 1 to 10"));
        if (secNum === userInput) {
            alert("congratulation your guess right number");
        }
        else {
            alert("Try again!");
        }

// Chapter no 31- 34

        // Task no 1
        var time = new Date()
        document.write(time)

        // Task no 2
        var time = new Date()
        var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        document.write("Current month: "+months[time.getMonth()])

        // Task no 3
        var time = new Date()
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        document.write("Today is "+days[time.getDay()])

        // Task no 4
        var time = new Date()
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        var day = time.getDay()   
        if(day === 0 || day === 6){
            alert("It's Fun Day!")
        }
        else{
            alert("Today is "+days[time.getDay()])
        }

        // Task no 5
        var time = new Date()
        var day = time.getDate()   
        if(day <= 15){
            alert("First fifteen days of month!")
        }
        else{
            alert("Last fifteen days of month!")
        }
        
        // Task no 6   
        var currentDate = new Date()

        document.write("Current date: "+ currentDate+ "<br>")
        document.write("Elapsed milisecond since januaury 1st ,1970: "+currentDate.getTime()+ "<br> ")
        document.write("Elapsed minutes since januaury 1st ,1970: "+(currentDate.getTime() / 60))

        // Task no 7
        var time = new Date()
        var hours = time.getHours()
        if(hours<12){
            alert("It's AM")
        }
        else{
            alert("It's PM")
        }

        // Task no 8
        var laterDay  = new Date("Dec 31, 2020")
        document.write("Later Day: "+laterDay)

        // Task no 9
        var ramzan2020  = new Date("april 24, 2020")
        var today = new Date()
        var miliSecTillRamzan = ramzan2020.getTime()
        var miliSecTillToday = today.getTime()
        var diffDays = (miliSecTillToday - miliSecTillRamzan)/(1000*60*60*24)
        document.write(Math.floor(diffDays)+ " Days past since 1st Ramzan, 2020")
    
        // Task no 10
        var jan  = new Date("jan 1, 2020")
        var today = new Date()
        var miliSecTillJan = jan.getTime()
        var miliSecTillToday = today.getTime()
        var diffSec = (miliSecTillToday - miliSecTillJan)/(1000)
        document.write("On Refrence date: "+jan+"<br>")
        document.write(Math.floor(diffSec) +" passed since beginning og 2020")

        // Task no 11
        var time = new Date()
        var changeHour = time.getHours() - 1
        var stringTime = time.toString()
        var updateTime = stringTime.slice(0,16) + changeHour + stringTime.slice(18)
        document.write("Current date: "+ time +"<br>")
        document.write("1 Hour ago it was "+ updateTime)

        // Task no 12
        var year1920  = new Date("june 23, 1920")
        var today = new Date()
        document.write("Current Date: "+ today +" <br> ")
        document.write("100 year back it was "+ year1920)

        // Task no 13
        var time  = new Date()
        var age = time.getFullYear() - 1998;
        document.write("Your age is "+ age +"<br>")
        document.write("Your birth year is 1998")

        // Task no 14
        var name = "Jawwad"
        var month = "March"
        var numOfUnit = 410
        var ratePerUnit = 16
        var latePaymentCharge = 350
        var netAmount = numOfUnit * ratePerUnit
        var grossAmount = netAmount + latePaymentCharge

        document.write("<h1>K-Electric Bill</h1><br><br>")
        document.write("Customer Name: "+ name +"<br>")
        document.write("Month: "+ month + "<br>")
        document.write("Number of unit: "+ numOfUnit + "<br>")
        document.write("Charges per unit: "+ ratePerUnit + "<br><br>")           
        document.write("Net Amount Payable (within Due Date): <b>"+ netAmount.toFixed(2)+ "</b><br>")
        document.write("Late payment charges: <b>"+ latePaymentCharge.toFixed(2)+ "</b><br>")
        document.write("Gross Amount Payable (after Due Date): <b>"+ grossAmount.toFixed(2)+ "</b><br>")        






    