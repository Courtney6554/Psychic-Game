    var wins = 1;
    var losses = 1;
    var guessesLeft = 10;
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var allUserGuess = [];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        document.getElementById("allUserGuess").innerHTML = userGuess + "," + allUserGuess;

        // For me.
        console.clear(computerGuess);
        console.log(computerGuess);

        // Limits user picks to computerChoices array values.
        if (computerChoices.indexOf(userGuess) !== -1) {
            
            //add next userGuess to front of array
            allUserGuess.unshift(" " + userGuess);

            // Guesses Left Countdown.
            if (guessesLeft > 0) {
                guessesLeft--;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;

            } else if (guessesLeft < 1) {
                allUserGuess = [];
                document.getElementById("allUserGuess").innerHTML = allUserGuess;
                guessesLeft = guessesLeft + 10;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;

            }

            // Wins.
            if (userGuess === computerGuess) {
                allUserGuess = [];
                document.getElementById("wins").innerHTML = wins;
                guessesLeft = guessesLeft + (10 - guessesLeft);
                document.getElementById("response").innerHTML = "You Win! Press Any Key To Keep Playing!"
                wins++;

            } else {
                document.getElementById("response").innerHTML = "Try Again.";

            }

            // Losses.
            if ((guessesLeft < 1) && (userGuess !== computerGuess)) {
                document.getElementById("losses").innerHTML = losses;
                document.getElementById("response").innerHTML = "You Lose! Press Any Letter To Play Again!";
                losses++;

            }
        }
    }