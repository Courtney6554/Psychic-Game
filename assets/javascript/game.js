    var wins = 1;
    var losses = 1;
    var guessesLeft = 10;


    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var allUserGuess = [];

    document.onkeyup = function(event) {
        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        document.getElementById("allUserGuess").innerHTML = allUserGuess;
        document.getElementById("computerGuess").innerHTML = computerGuess;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        if (guessesLeft > 0) {
        guessesLeft--;
         } else if (guessesLeft == 0) {
            guessesLeft = guessesLeft + 10;
         }

        if (computerChoices.indexOf(userGuess) !== -1) {
            allUserGuess.push(" " + userGuess);
            document.getElementById("response").innerHTML = "Not Valid Entry. Try Again."


            if (userGuess === computerGuess) {

                document.getElementById("wins").innerHTML = wins;
                document.getElementById("response").innerHTML = "You Win! Press Any Key to Play Again!"
                wins++;
                guessesLeft = guessesLeft + (10 - guessesLeft);


            } else {

                document.getElementById("response").innerHTML = "Try Again.";

            }


            if ((guessesLeft === 0) && (userGuess !== computerGuess)) {
                document.getElementById("losses").innerHTML = losses;
                document.getElementById("response").innerHTML = "You Lose!  Press Any Key to Play Again";
                losses++;

            }



        }


    }