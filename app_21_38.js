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

    





    