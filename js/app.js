'use strict'
let rightAnswers = 0;
let userName = prompt('please enter your name:');
//console.log(userName);
alert('welcom ' + ' ' + userName);
//_______________________________________________________________//



function userQuestion(question, correctAns, unCorrectAns) {
    let userInput;
    do {
        userInput = prompt(question);
    } while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

    if (userInput === 'yes' || userInput === 'y') {
        // console.log(correctAns);
        rightAnswers++;
    } else {
        // console.log(unCorrectAns);
    }
}

userQuestion('Do I live in amman?', 'yes i live in amman', 'wrong');
userQuestion('Do I drink coffee?', 'no i dont drink cofee', 'yes right');
userQuestion('Do I like summer?', 'i love summer reason', 'i like summer');
userQuestion('Do I hate cats?', 'yes i hate cats', 'Cats scare me');
userQuestion('Am I studied in yarmouk university?', 'yes i stydied in al yarmouk', 'read my bio');




//_____________________________________________________________________________________________________
function walaa(w) {
    w = prompt('how many child i have?');
    for (let i = 0; i < 3; i++) {
        if (w == 1) {
            alert ('right');
            rightAnswers++;
            break;
        } 
    }
 if (w<4) {
        alert('too hot');
    }
  else  if (w > 5) {
    alert ('too cool');
    }

}

walaa();
// ___________________________________________________________________________________________________//

function singers(myTop, mySingers) {
    myTop = prompt(' whos my faviorate singers please chooze one from (wael ,rashed , najwa , kathem,fayrouz ) ?');
    mySingers = ['wael', 'fayrouz', 'umm kalthoum', 'rashed ', 'melhem barakat', 'shereen', 'kathem', 'najwa karam', 'majed almohandes', 'amro diab'];
    outerSecond: for (let i = 0; i < 6; i++) {
        for (let j = 0; j < mySingers.length; j++) {
            if (myTop === mySingers[j]) {
                alert('listen to my singer');
                rightAnswers++;
                break outerSecond;
            }


        }
        myTop = prompt('please chooze one from (wael ,rashed , najwa , kathem,fayrouz ) ?');
    }
}
singers();

alert('your rightanswers is : ' + rightAnswers);
alert('thank you for give me time to demo my website' + ' ' + userName)

