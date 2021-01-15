'use strict';

//when we want to select a selector like class or id
//the selctor is exactly same that we use in css
//document.querySelector(".message")...>>> this part select the element and result of it is ganna be an element
//on that element we can get text content property with...>>>>.textContent.....>>> this part for getting the text in element

/*
console.log(document.querySelector(".message").textContent)

document.querySelector(".message").textContent = ("Correct Number!");

document.querySelector(".number").textContent = 13
document.querySelector(".score").textContent = 10

document.querySelector(".guess").value = 23
console.log(document.querySelector(".guess").value)
*/

////////////////////////////////////////
//event

//we can call the addEventListener method. Now, there are actually multiple ways to listen for events in JavaScript.
// But using this addEventListener method is the best one and also the most used one.
//here event listener is click ,,,now we need to tell the event listener what to do.
//we need a function that happen whenever we click on this check button
//addEventListener, it is a method
//one argument for method is we had the name of the event that we're listening for,
// for second argument we now need to pass in a function value as an argument.
// we write a function in arguement instead to define it exit of it
// this function simply contains the code that we want to execute whenever the event happens.
//.guss.value from this element we get value

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const dispalyMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  //because we have to compare this number with others so ve have to convert it to NUmber
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //there's a actually no guess.And if there is no value, well,
  //if it is not value, not guess,!guess>>>>>it is true value

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = " No Number:["
    dispalyMessage(' No Number:[');
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number:)!!!"
    dispalyMessage('Correct Number:)!!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    //style here go directly in html in element.here the value always has to be string
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong. guess is difffrent from secret num
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High:O !" : "Too Low:O !"
      dispalyMessage(guess > secretNumber ? 'High:O !' : 'Low:O !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You Lost The Game"
      dispalyMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//     else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High:O !"
//       score--
//       document.querySelector(".score").textContent = score
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game"
//       document.querySelector(".score").textContent = 0
//     }
//
//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low:O !"
//       score--
//       document.querySelector(".score").textContent = score
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game"
//       document.querySelector(".score").textContent = 0
//     }
//   }
// })

//type = the name of the event.....we have  anonymous function, bc it doesnt have the name
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "...Start Again"
  dispalyMessage('...Start Again');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = '15rem';
});


