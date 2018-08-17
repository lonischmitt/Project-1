// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quote = [
    ["The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself." , 
    "Mark Caine"],
    ["When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    "Helen Keller"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the one4s you did do",
    "Mark Twain"],
    
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote (){
    
    for (var quote = 0; quote < 3; quote++)
        quote += possible.charAt(Math.floor(Math.random)
    
        return (getRandomQuote);
}
console.log(getRandomQuote());

// Create the printQuote funtion and name it printQuote
function printQuote (){
    document.write(getRandomQuote)
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);