// random value generated
var randomnumber = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submit").onclick = function(){

// number guessed by user	
var guessnumber = document.getElementById("guess").value;

if(guessnumber == randomnumber)
{	
alert("Great!! You took " + guess + " attempts to guess it right.");
}
else if(guessnumber > randomnumber) /* if guessed number is greater
            than actual number*/
{	
guess++;
alert("Not Really! Give it another try……Try a smaller number");
}
else
{
guess++;
alert("Not Really! Give it another try…… Try a Greater number")
}
}