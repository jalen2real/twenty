alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing agains the computer. You will draw numbers 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press 'y'.")

alert("Now... it is computer's turn")

var computer = 0;
var human = 0;

do {

    var ran = Math.floor(Math.random() * 10) +1

    computer  = computer  + ran

    alert(`Computer new number is ${ran}. 
    
    Computer new total is ${computer}.`)

    if (computer >= 20) break



} while ( computer < 16 )

alert(`Computer will stop ${computer}.`)

alert(`Now it is human's turn.`)

do {

    var ran2 = Math.floor(Math.random() * 10) +1

    human = human + ran2

    alert(`Human new number is ${ran2}. 
    
    Human new total is ${human}.`)

    if (human >= 20) {
        break
    }

    var decision = prompt(`Would you like another number? If you would like to stop, press "n" to stop.`)


} while ( (human < 20) && (decision != "n"))






console.log("Exit")