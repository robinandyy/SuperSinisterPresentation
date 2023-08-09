// var food = 20;
// var money = 30;

// if (money>=food){
//     console.log("You can get your food today!")
// }

// function becomeMember(){
//     console.log('Welcome you are a member now!')
// }

// becomeMember()


// // get random number from 0-1
// var randomNumb = Math.random();
// console.log(randomNumb);

// var biggerRandomNumb = Math.random() * 100; // corrected line
// // multiply to get bigger numbers
// var rounded = Math.round(biggerRandomNumb);
// console.log(rounded+"%");

// // generate number from one to six
// var OneToSix = Math.random() * 6 + 1;
// // floor rounds down i think
// var round = Math.floor(OneToSix);
// console.log(round + "%")


// // or you can do it this way
// var OneSix = Math.random() * 6;
// // don't have to add one cause ceil rounds up 
// var round = Math.ceil(OneSix);
// console.log(round)

// // mark from 0 to 100 
// var mark = Math.random() * 101;
// var round = Math.floor(mark)
// console.log(round)

// if(round<50){
//     console.log("you failed the exam.")
// }
// else if(round < 75){
//     console.log("You passed the exam with an average mark.")
// }
// else{console.log("You passed the exam with a great mark!")}


// function sum(n1,n2){
//     return n1 + n2
// }

// console.log(sum(2,4))

// function greeting(person){
//     return "Hi " + person + ", welcome back!"
// }

// console.log(greeting("Demarco"))


// var1 = prompt("please enter the first number in the multiplication.");
// var2 = prompt("Please enter the second.");
// function multiply(var1, var2){
//     product = var1*var2
//     alert("the product is " + product)
// }

// console.log(multiply(var1,var2))

// var friends = ["Jim", "Luna", "Tom"];
// // print Jim
// console.log(friends[0])

// // check to find element
// console.log(friends.includes("Robin"))
// // prints false


// name = prompt("Please enter your name");
// var friends = [ "Demarco", "Mayhem", "Coach", "Abi", "Sophie", "Lala"]
// friends[1] = "Maymo"
// // add to end of list
// friends.push("tim tam")
// // remove last name on list
// friends.pop()
// // remove first
// friends.shift()
// function nameCheck(name){
//     if(friends.includes(name)){
//         alert("You have access.")
//     }
//     else{
//         alert("You do not have access.")
//     }
//     console.log(friends)
// }

// nameCheck(name)


// remainders

20%8
// is four - two eights in 20 then four remaining
20%10 
// is zero cause two tens go in then zero remaining

var count = 1;

// function pomodoro(){
//     pomodoro = []
//     if(count == 1); or (count == 2); or (count == 3);{
//         count =+ 1
//         pomodoro.push(5)

//     }
//     else{
//         count=1
//         pomodoro.push(15)
//     }
//     console.log(pomodoro)

// }

// var count = 1;

// function pomodoro() {
//   var pomodoroArray = []; // Changed variable name to avoid conflict
//   if (count == 1 || count == 2 || count == 3) { // Corrected the syntax of the if statement
//     count += 1; // Corrected the assignment operator
//     pomodoroArray.push(5); // Changed the variable name

//   } else {
//     count = 1; // Reset count if it is not 1, 2, or 3
//     pomodoroArray.push(15); // Changed the variable name
//   }
//   console.log(pomodoroArray); // Output the pomodoroArray
// }



// pomodoro()
// pomodoro()
// pomodoro()
// pomodoro()


// var breakTime = []
// var round = 1;

// function addBreakTime(){
//     while(round <= 8){
//         if(round%4 == 0){
//             breakTime.push(15);
//             console.log(breakTime)
//         }
//         else{
//             breakTime.push(5);
//             console.log(breakTime)
//         }
//             // increases by 1
//             round++; 
//     }
// }

// addBreakTime()

// for (var i = 1; i<=3; i++;){
//     console.log(i);
// }



function printEven(numbList){
    for (var i=0; i < numbList.length; i++){
        if(numbList[i] % 2 == 0){
            console.log(numbList[i])
        }
    }
}

var numbList = [2,3,4,5,6,9,14,45,66]

printEven(numbList)


// // DOM Selectors

// // by tag name
//     // gives array of elements but you can idex a specific one
// document.getElementsByName("a")[0]

// // by class name
//     // reference class name and gives array of elements in class
//     // can also index though
// document.getElementsByClassName("btn")[0]

// // by id - gives specific element
// document.getElementById("tim")

// // by query selector 
//     // can have tag, class, or id 
//     // if tag or class, shows first one
//     // you can write more than one selector at once
// document.querySelector("a #tim")

// // give all selected classes
// document.querySelectorAll

// document.getElementById("test").innerHTML = "<h2>hehehe<h2>"
// document.getElementsByTagName("h1")[0].textContent = "the new Title"

// function reviewAppear(){
//     document.getElementsByTagName("img")[0].innerHTML = "<p>Amazing</p>"
// }

// function makeDarker(){
//     document.getElementsByTagName("img")[0].style.filter = "brightness(50%)"
// }

var int1 = 2;
var int2 = 3;

// if(int1>int2){
//     console.log(int1)
// }

// else if(int2>int1){
//     console.log(int2)
// }

// else{
//     console.log("The two numbers are equal.")
// }

// if(int1>0){
//     alert("The sign is +")
// }

// else if(int1<0){
//     alert("The sign is -")
// }

// else{
//     alert("The sign is niether + nor - as the value is 0.")
// }

// for(let i=0; i<=15; i++){
//     if(i%2==0){
//         console.log(i + " is an equal number.")
//     }

//     else{
//         console.log(i + " is an odd number.")
//     }
// }


// var1 = 1;
// var2 = 2;
// var3 = 3;
// var4 = 4;
// var5 = 5;

// if(var1 > var2 && var1 > var3 && var1 > var4 && var1 > var5){
//     alert(var1.toString() + " the first number is the largest")
// }

// else
// if(var2 > var1 && var2 > var3 && var2 > var4 && var2 > var5){
//     alert(var2.toString() + " is the largest.")
// }

// else
// if(var3 > var1 && var3 > var2 && var3 > var4 && var3 > var5){
//     alert(var3.toString() + " is the largest.")
// }

// else
// if(var4 > var2 && var4 > var3 && var4 > var1 && var4 > var5){
//     alert(var4.toString() + " is the largest.")
// }

// else{
//     alert(var5.toString() + " is the largest.")
// }

var students = {David:80, Vinoth:77, Divya:88, Ishitha:95, Thomas:68};
var total = 0;
for (const value of Object.values(students)) {
    total += value;
    console.log(value)
}

var average = total/Object.keys(students).length;

alert("average is " + average.toString() + ".")

// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and 
// for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for(let i=0; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }

    else if(i%3==0){
        console.log("Fizz")
    }

    else if(i%5==0){
        console.log("Buzz")
    }

    else{
        console.log(i)
    }
}