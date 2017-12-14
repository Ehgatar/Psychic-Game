<script type="text/javascript"> 
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        guessesSoFar.push(userGuess);
        if (userGuess === computerGuess) {
            wins++;
            alert('You\'ve guesesed corrrectly, You Won!');
            guessesLeft = 9;
            guessesSoFar.length = 0;
    }
        else if (guessesLeft === 0) {
            losses++;
            alert('You didn\'t guess the correct letter. You lost, but try again');
            guessesLeft = 9;
            guessesSoFar.length = 0; 
    }    
         else if (userGuess !== computerGuess){
            guessesLeft--;
    } 

        var html = "<h1>The Psychic Game</h1>" + 
        "<p1>Guess what letter I'm thinking of!</p1>" +
        "<ul>Total Wins: " + 
        wins + 
        "</ul>" +
        "<ul>Total Losses: " + 
        losses + 
        "</ul>" +
        "<ul>Guesses Left: " + 
        guessesLeft + 
        "</ul>" +
        "<ul>Your Guesses so far: " +
        guessesSoFar +
        "</ul>"
        ;
        
        document.querySelector('#game').innerHTML = html; 
</script>
