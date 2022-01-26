// Chapter no 38 to 42

//  Task no 1
function Power(a, b){
    var power;
    if(b === 0){
        power = 1
    }
    else{
        power = a;
        for(var i  = 1; i< b; i++){
        power = power * a;
        }
    }
    return power;   
}

// Task no 2
function checkLeapYear(year){
    var message;
    if((year%4) === 0 ){
        alert(  year + " is leap year")
    }
    else{
        alert(  year + " is not leap year")
    }
}

// Task no 3
function areaOfTriangle(a,b,c){
    var sideA = a;
    var sideB = b;
    var sideC = c;

    function calculateValueOf_S(sideA, sideB, sideC){
        return ((sideA + sideB + sideC)/2)
    }
    var s = calculateValueOf_S(sideA, sideB, sideC)
    var area = s*(s-sideA)*(s-sideB)*(s-sideC)
    return area
}        
alert(areaOfTriangle(1,1,1))
// something wrong in question


// task no 5
function  myIndexOf(a, b){
    var line = a 
    var occurance = b
    var found  =  false

    for(var i = 0 ; i<= a.length - 1; i++){
        // console.log(line[i])
        if(line[i].toLowerCase() === occurance.toLowerCase()){
            found  =  true
            break
        }
        else{
            found  =  false
        }
    }
    if(found){
        console.log("index of "+ b + " is " + i)
    }
    else{
        console.log( b + " is not present")
    }
}

// task no 6
function removingVovels(strStatement){

    var statement = strStatement
    var newStatement = "" 
    for(var i = 0; i<= statement.length - 1; i++){
        switch(statement[i].toLowerCase()){
            case "a":
                statement = statement.slice(0, i)+statement.slice(i+1)
                break
            case "e":
                statement = statement.slice(0, i)+statement.slice(i+1)
                break
            case "i":
                statement = statement.slice(0, i)+statement.slice(i+1)
                break
            case "o":
                statement = statement.slice(0, i)+statement.slice(i+1)
                break
            case "u":
                statement = statement.slice(0, i)+statement.slice(i+1)
                break

        }
    }
}

// task no 7


// task no 8
function distanceConverter(k){
    var km = k
    var meter = 0
    var feets = 0
    var inches = 0
    var centimeter = 0
    function changingIntoMeter(km){
        meter = km * 1000
    }
    changingIntoMeter(km)

    function changingIntoFeet(meter){
        feets = meter * 3.28
    }
    changingIntoFeet(meter)

    function changingIntoInches(feets){
        inches = feets * 12
    }
    changingIntoInches(feets)

    function changingIntoCentimeter(meter){
        centimeter = meter * 100
    }
    changingIntoCentimeter(meter)

    console.log("Kilometer Converter")
    console.log("Kilometer = "+ km)
    console.log("Meter = "+ meter)
    console.log("Feets = "+ feets)
    console.log("Inches = "+ inches)
    console.log("Centimeter = "+ centimeter)
}

distanceConverter(1)


// task no 9

// task no 10
function cashConverter(){
    var amount = prompt("Enter the amount to with draw in multiple of 10!")
    var originalAmount = amount
    var hundred = Math.floor(amount / 100)
    amount = amount % 100
    
    var fifty = Math.floor(amount / 50)
    amount = amount % 50

    var ten = Math.floor(amount / 10)

    console.log("Amount = "+ originalAmount)
    console.log("You will have to pay.")
    if(hundred != 0){
        console.log(hundred+" hundred's note.")
    }
    if(fifty != 0){
        console.log(fifty+" fifty's note.")
    }
    if(ten != 0){
        console.log(ten+" ten's note.")
    }
}
cashConverter()


