'use strict'
let rightAnswers = 0;
let userName = prompt('please enter your name:');
console.log(userName);
alert('welcom ' +' '+ userName);
//_______________________________________________________________//

function questions(myTown, myStudy, myUniversity, mySkill, myExperience) {

    myTown = prompt('am I from amman?').toLowerCase();

    if (myTown === 'yes' || myTown === 'y') {
        alert('yes I live in Amman');
        //console.log('i love amman');
        rightAnswers++;
    }
    if (myTown === 'no' || myTown === 'n') {
        alert('I live in amman ');

    }
    else if (myTown != 'yes' && myTown != 'no' && myTown != 'y' && myTown != 'n') {
        myTown = prompt('please type yes , no ,n , y');


    }

    myStudy = prompt('am I study statistics?').toLowerCase();
    console.log(myStudy);
    if (myStudy === 'yes' || myStudy === 'y') {
        alert('yes I study statistics');
        // console.log('i love statistics');
        rightAnswers++;
    }
    if (myStudy === 'no' || myStudy === 'n') {
        alert('read my biography ');

    }
    else if (myStudy != 'yes' && myStudy != 'no' && myStudy != 'y' && myStudy != 'n') {
        alert('please type yes , no ,n , y');
        myStudy = prompt('please type yes , no ,n , y');
    }
    myUniversity = prompt('is my university is JUST?').toLowerCase();
    //console.log(myUniversity);
    if (myUniversity === 'yes' || myUniversity === 'y') {
        alert('No my university is al yarmouk');
    }
    if (myUniversity === 'no' || myUniversity === 'n') {
        alert('your answer right');
        //console.log ('my university is yarmouk');
    } rightAnswers++;
     if (myUniversity != 'yes' && myUniversity != 'y' && myUniversity != 'no' && myUniversity != 'n') {
        myUniversity = prompt('please type yes , no ,n , y');
    }

    mySkill = prompt('Do I have computer skills?').toLowerCase();
    console.log(mySkill);
    if (mySkill === 'yes' || mySkill === 'y') {
        alert('yes I have this skill');
        //console.log('love computer ');
        rightAnswers++;
    }
    else if (mySkill === 'no' || mySkill === 'n') {
        alert('no I  have this skill');

    }
    else if (mySkill != 'yes' && mySkill != 'y' && mySkill != 'no' && mySkill != 'n') {
        mySkill = prompt('please type yes , no ,n , y');
    }

    myExperience = prompt('I have any experience?').toLowerCase();
    console.log(myExperience);
    if (myExperience === 'yes' || myExperience === 'y') {
        alert('no I dont have any experience');

    }
    else if (myExperience === 'no' || myExperience === 'n') {
        alert('that is right ');
        //console.log('i hope get any chance');
        rightAnswers++;

    }
    else if (myExperience != 'yes' && myExperience != 'y' && myExperience != 'no' && myExperience != 'n') {
        myExperience = prompt('please type yes , no ,n , y');
    }
}
questions();

//_____________________________________________________________________________________________________
function walaa(w) {
    w =Number( prompt('how many child i have?'))
  outerloop:  for (let i = 0; i < 4; i++) {
        while (w === 1) {
            alert('right');
            break outerloop;
        } rightAnswers++;
        if (w < 3) {
            alert('too hot');
            w = prompt('plz try again')
        }
        else if (w > 5) {
            alert('too cool');
            w = prompt('plz try again')
        }
    } 
}
walaa();
// ___________________________________________________________________________________________________//

function singers(myTop, mySingers) {
    myTop = prompt(' whos my faviorate singers please chooze one from (wael ,rashed , najwa , kathem,fayrouz ) ?');
    mySingers = ['wael', 'fayrouz', 'umm kalthoum', 'rashed ', 'melhem barakat', 'shereen', 'kathem', 'najwa karam', 'majed almohandes', 'amro diab'];
 outerSecond:for (let i = 0; i < 6; i++) {
        for (let j = 0; j < mySingers.length; j++) {
            if (myTop === mySingers [j]) {
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

