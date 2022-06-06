// random value 
var randomnumber = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses are made for correct Guess
var guess = 1;

document.getElementById("submit").onclick = function(){

// number guessed by user	
var guessnumber = document.getElementById("guess").value;

if(guessnumber == randomnumber)
{	
alert("Great!! You took " + guess + " attempts to guess it right.");
}
else if(guessnumber > randomnumber)
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