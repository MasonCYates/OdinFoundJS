//let name="John";
//let admin;
//admin=name;
//alert(admin);

//let ourPlanet="Earth"
//let userVisiting="New User"
//alert(ourPlanet+"\n"+userVisiting)

//const max = 57;
//let actual = max - 13;
//let percentage = actual/max;
//alert(percentage)

//const name = 'Chris'
//const greeting = `Hello, ${name}`;
//console.log(greeting);

//const one = 'Hello, ';
//const two = 'how are you?';
//const joined = `${one}${two}`;

//This is an example function on how to make clickable items respond to js.
//IMPORTANT ITEM FOR LATER!!!!!!!
//function greeting() {
//    const name=prompt('What is your name?');
//    alert(`Hello ${name}, nice to meet you!`);
//}

//All of this is how we can use comparisons.
//alert( 2 > 1 );  // true (correct)
//alert( 2 == 1 ); // false (wrong)
//alert( 2 != 1 ); // true (correct)

//let result = 5 > 4; // assign the result of the comparison
//alert( result ); // true

//alert( 'Z' > 'A' ); // true
//alert( 'Glow' > 'Glee' ); // true
//alert( 'Bee' > 'Be' ); // true

//alert( '2' > 1 ); // true, string '2' becomes a number 2
//alert( '01' == 1 ); // true, string '01' becomes a number 1

//alert( true == 1 ); // true
//alert( false == 0 ); // true

//Below will be the statements section
//this is a good item to review.
//if (condition) {
    //  block of code to be executed if the condition is true
//  }

//if (hour < 18) {
//    greeting = "Good day";
//}

//if (condition) {
    //  block of code to be executed if the condition is true
//  } else {
    //  block of code to be executed if the condition is false
// }

//if (hour < 18) {
//    greeting = "Good day";
//  } else {
//    greeting = "Good evening";
//  }

//if (condition1) {
    //  block of code to be executed if condition1 is true
//  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
//  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
//  }

//if (time < 10) {
//    greeting = "Good morning";
//  } else if (time < 20) {
//    greeting = "Good day";
//  } else {
//    greeting = "Good evening";
//  }

//This section will be about logical operators
//The first ones will be the || OR operator
//alert( true || true );   // true
//alert( false || true );  // true
//alert( true || false );  // true
//alert( false || false ); // false

//if (1 || 0) { // works just like if( true || false )
//    alert( 'truthy!' );
//  }

//let hour = 9;

//if (hour < 10 || hour > 18) {
//    alert( 'The office is closed.' );
//  }

// These will be the && operators
//alert( true && true );   // true
//alert( false && true );  // false
//alert( true && false );  // false
//alert( false && false ); // false

//let hour = 12;
//let minute = 30;

//if (hour == 12 && minute == 30) {
//  alert( 'The time is 12:30' );
//}

//Onwards now here will be some switch expression examples!
//these are IMPORTANT!
//switch (expression) {
//	case x:
		// execute case x code block
//		break;
//	case y:
		// execute case y code block
//		break;
//	default:
		// execute default code block
//}

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
//const day = new Date().getDay();

//switch (day) {
//	case 0:
//		console.log("It's Sunday, time to relax!");
//		break;
//	case 1:
//		console.log("Happy Monday!");
//		break;
//	case 2:
//		console.log("It's Tuesday. You got this!");
//		break;
//	case 3:
//		console.log("Hump day already!");
//		break;
//	case 4:
//		console.log("Just one more day 'til the weekend!");
//		break;
//	case 5:
//		console.log("Happy Friday!");
//		break;
//	case 6:
//		console.log("Have a wonderful Saturday!");
//		break;
//	default:
//		console.log("Something went horribly wrong...");
//}
//This function shows how to create html elements and styling through the dom.
//function actions(){
    //this accesses the html and accesses anything with the class of contain.
//    let container = document.querySelector('.contain');
    //creates an element and stores it in the variable.
//    let p = document.createElement('p');
//    let h3 = document.createElement('h3');
//    let div = document.createElement('div');
//        let h1 = document.createElement('h1');
//        let p2 = document.createElement('p');
//        p2.textContent = 'ME TOO!'
//        h1.textContent = 'I\'m in a div.';
//    div.style.background.color = 'pink'
//    div.style.border.color = 'black';
//    h3.style.color = 'blue';
//    h3.textContent = 'I\'m a blue h3!';
//    p.style.color = 'red';
//    p.textContent = 'Hey I\'m Red';
//    
//    div.appendChild(h1);
//    div.appendChild(p2);
//    container.appendChild(p);
//    container.appendChild(h3);
//    container.appendChild(div);
//
//}
//adds an event listener for the click of a button. when clicked it will 
//run any code in the brackets.
//const btn = document.querySelector('#btn');
//btn.addEventListener('click', () => {
//  alert("Hello World"); // this is the code that will be ran.
//});
