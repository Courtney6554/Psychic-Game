    var wins = 1;
    var losses = 1;
    var TOTAL_GUESSES = 10;


    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var allUserGuess = [];

    document.onkeydown = function(event){
        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var guessesLeft = TOTAL_GUESSES--;

        document.getElementById("allUserGuess").innerHTML = allUserGuess;
        document.getElementById("computerGuess").innerHTML = computerGuess;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;


        function myReset(x) {
        	var x = guessesLeft + 10;
        	document.getElementById("guessesLeft").innerHTML = x;
        	return x;
        	
            document.getElementById("result").innerHTML = "Choose Any Letter";
        

        }

        if (computerChoices.indexOf(userGuess) !== -1) {
            allUserGuess.push(" " + userGuess);
            document.getElementById("result").innerHTML = "Not Valid Entry. Try Again."


            if (userGuess === computerGuess) {

                document.getElementById("wins").innerHTML = wins;
                document.getElementById("result").innerHTML = "You Win! Press Any Key to Play Again!"
                wins++;


            } else {

                document.getElementById("result").innerHTML = "Try Again.";

            }


            if ((guessesLeft === 0) && (userGuess !== computerGuess)) {
                document.getElementById("losses").innerHTML = losses;
                document.getElementById("result").innerHTML = "You Lose!  Press Any Key to Play Again";
                losses++;

            }
            
            if (guessesLeft < 0) {
                myReset(10);

            }




        }


    }
