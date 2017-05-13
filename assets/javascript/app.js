/*
 * File:
 *		app.js
 *
 *	Description:
 *		The javascript that runs the triviaGame.   There is an array
 *		of Objects that encapsulates all the questions.   Each Object
 *		will have a question, a list of possible answers, an answer
 *		and an image.  TBD.
 *
 *	Created:
 *		7 MAY 2017
 *
 *	Comment:
 *		It would be nice to keep all the data outside of the progrtam
 *		but at this point I dont know how to do that.
 *
 */

 /*
  * GLOBALS
  *		I am developing a technique to guarentee that my GLOBAL variables
  * 	will not step on variables that may possibly be defined before this
  *		point.    This is my ALPHA release of this technique ... As I
  *		learn more about the hack called "javascript" I will HOPEFULLY be
  *		able to evolve this concept.
  *
  *		THIS IS AN EXAMPLE OF MY EXPERIENCE IN SOFTWARE DEVELOPMENT.
  */

  /*
   *	I NEED THESE DEFINITIONS TO MOVE FORWARD.. So .. If they do not
   *	exist (defined) I need to make them with some defaults...
   */
 if( "#APPNAME" === null )
 	var APPNAME = "TRIVIA-GAME";

if( "#TAG_SEPARATOR" === null )
\	var TAG_SEPARATOR = ".";
)
 var LOG_DIVTAG = "LogDiv";
 var LOG_DIV = APPNAME + TAG_SEPARATOR + LOG_DIVTAG;
 var TimerId = 0;

/*
 *	Func:
 *		ready()
 *
 *	Description:
 *		the routine called when the page is loaded, window is
 *		created and we are ready to start ...
 */
$(document).ready(function()
{
	var NUMBER_OF_QUESTIONS = 5;   // hard coded for now
	var QUIZ_TIMELENGTH = ( (NUMBER_OF_QUESTIONS * (5 * 1000) ) );   // Give 5seconds per question

    var answerOne;
    var answerTwo;
    var answerThree;
    var answerFour;
    var answerFive;
    var numberCorrect = 0;
    var numberWrong = 0;
	var numberUnAnswered = NUMBER_OF_QUESTIONS;

    $("#startButton").click(function()
	{
        // var numberCorrect = 0;
        // var numberWrong = 0;
        $("#startButton").remove();
        $("#questions").show();

        //taken from StackOverflow
        function timer((10 * 1000), interval, complete)
		{
            var start = new Date().getTime();
            var interval = setInterval(function()
			{
                var now = time - (new Date().getTime() - start);
                if (now <= 0)
				{
                    clearInterval(interval);
                    complete();
                }
				else update(Math.floor(now / 1000));
            }, 100); // the smaller this number, the more accurate the timer will be
        }

        timer( TIMER_LENGTH, onAlarm(timeleft), onTimeout );
	});


    });

});

function onAlarm(timeleft)
{
	//document.getElementById("timer").innerHTML = timeleft + " second(s)";
	//$("timer").replaceWith(  );
	LOG( "You have " + timeleft + " second(s)" );

}
function onTimeout()
{
	LOG( "BOOO #LOOSER!")
}
/*
 *	Func:
 *		submit.click()
 *	Description
 *		this is the routine called when either the submit button is
 *		clicked OR the timer expires.
 */
$("input[type='submit']").click(function() {
    var numberCorrect = 0;
    var numberWrong = 0;
	var numberNotAnswered = 0;

    var answerOne = $("input[name='q1']:checked").val();

	if( answerOne == undefined )
	{
		numberNotAnswered++;
		console.log( "Question1:  not answered ");
	}
	else
	{
		if (answerOne === "1")
		{
			numberCorrect++;
		}
		else
		{
			numberWrong++;
		}
	}

	//
    // if (answerOne === "1") { //Took me an hour to figure out this needed to be a string!
    //     numberCorrect++;
    //     console.log(numberCorrect);
    // } else if (!$("input[name='q1']:checked")) {
    //     numberWrong++;
    //     console.log(numberWrong)
    // } else {
    //     numberWrong++;
    //     console.log(numberWrong);
    // }

    /////////////////////////////////2nd Question/////////////////////////////////////////////

    var answerTwo = $("input[name='q2']:checked").val();
    LOG( "ANSWER 2: " + answerTwo );


    if (answerTwo === "1") { //Took me an hour to figure out this needed to be a string!
        numberCorrect++;
        console.log(numberCorrect);
    } else if (!$("input[name='q2']:checked")) {
        numberWrong++;
        console.log(numberWrong)
    } else {
        numberWrong++;
        console.log(numberWrong);
    }


    /////////////////////////////////////3rd Question//////////////////////////////////////////////
    var answerThree = $("input[name='q3']:checked").val();
    console.log(answerThree);


    if (answerThree === "1") { //Took me an hour to figure out this needed to be a string!
        numberCorrect++;
        console.log(numberCorrect);
    } else if (!$("input[name='q3']:checked")) {
        numberWrong++;
        console.log(numberWrong)
    } else {
        numberWrong++;
        console.log(numberWrong);
    }

    //////////////////////////////////////4th Question check////////////////////////////////////
    var answerFour = $("input[name='q4']:checked").val();
    console.log(answerFour);


    if (answerFour === "1") { //Took me an hour to figure out this needed to be a string!
        numberCorrect++;
        console.log(numberCorrect);
    } else if (!$("input[name='q4']:checked")) {
        numberWrong++;
        console.log(numberWrong)
    } else {
        numberWrong++;
        console.log(numberWrong);
    }

    ///////////////////////////5th Question/////////////////////////////////////////////////////
    var answerFive = $("input[name='q5']:checked").val();
    console.log(answerFive);


    if (answerFive === "1") { //Took me an hour to figure out this needed to be a string!
        numberCorrect++;
        console.log(numberCorrect);
    } else if (!$("input[name='q5']:checked")) {
        numberWrong++;
        console.log(numberWrong)
    } else {
        numberWrong++;
        console.log(numberWrong);
    }

    $(".container").hide();
    var newDiv = $("<div>");
    $("div").text("You guessed " + numberCorrect + " correctly!   You guessed " + numberWrong + " incorrectly!");


}); // closes input type submit .click function

/*
 *	Func:
 *		LOG( message )
 *
 *	Description:
 *		Simple wrapper for the Debug mechanism to write sihgle lihe strihgs to a "div" with the ID "debugID"
 */
function LOG( message )
{
	LOG( message, LOG_DIVID );
}

/*
 *	Func:
 *		Debug( message, divID )
 *
 *	Description:
 *		send text to a <div>
 */
function LOG( message, logDivID )
{
	/*
	 * make sure that the debugID exists!!!!
	 */
	if( $( logDivID != null )
	{
		$( logDivID ).append( message );

		if( message.endsWith( "\n" ) == false )
			$( logDivID ).append( "\n");
	}

	/*
	 * fail safe measure -- force this message to go to the console
	 */
	console.log( message );
}
