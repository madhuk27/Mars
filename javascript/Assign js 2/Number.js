// randomnumber
alert("1")
var randomnumber = parseInt(Math.random() * 10);
alert(randomnumber)

// number of guesses
var guess = 1;

document.getElementById("submit").onclick = function(){
    
// guessnumber	
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