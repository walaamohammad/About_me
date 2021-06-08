'use strict'
let rightAnswers=0;

let userName = prompt('please enter your name:');
console.log(userName);
alert('welcom' + '' + '' + userName);
let myTown = prompt('am I from amman?').toLowerCase();
console.log(myTown);
if (myTown === 'yes' || myTown === 'y') {
    alert('yes I live in Amman');
    console.log('i love amman');
    rightAnswers++;
}
else if (myTown === 'no' || myTown === 'n') {
    alert('I live in amman ');
}

let myStudy = prompt('am I study statistics?').toLowerCase();
console.log(myStudy);
if (myStudy === 'yes' || myStudy === 'y') {
    alert('yes I study statistics');
    // console.log('i love statistics');
    rightAnswers++;
}
else if (myStudy === 'no' || myStudy === 'n') {
    alert('read my biography ');
}
let myUniversity = prompt('is my university is JUST?').toLowerCase();
//console.log(myUniversity);
if (myUniversity === 'yes' || myUniversity === 'y') {
    alert('No my university is al yarmouk');
}
else if (myUniversity === 'no' || myUniversity === 'n') {
    alert('your answer right');
    //console.log ('my university is yarmouk');
}
let mySkill = prompt('Do I have computer skills?').toLowerCase();
console.log(mySkill);
if (mySkill === 'yes' || mySkill === 'y') {
    alert('yes I have this skill');
    //console.log('love computer ');
    rightAnswers++;
}
else if (mySkill === 'no' || mySkill === 'n') {
    alert('no I  have this skill');
}

let myExperience = prompt('I have any experience?').toLowerCase();
console.log(myExperience);
if (myExperience === 'yes' || myExperience === 'y') {
    alert('no I dont have any experience');
    rightAnswers++;
}
else if (myExperience === 'no' || myExperience === 'n') {
    alert('that is right ');
    //console.log('i hope get any chance');
}
let w = prompt('how many child i have?');
console.log(w);
var myChild = 1;
console.log(myChild);
let count = 1;
console.log(count);
while (count <= 4)  {
    if (Number(w) === 1) {
        alert('that is right');
        rightAnswers++;
        break;

    }
    w = prompt('plz try again')
    count++;
    
}

let myTop= prompt(' whos my faviorate singers?');
console.log(myTop);
 let mySingers=['wael kfouri' ,'fayrouz','umm kalthoum','rashed almajed','melhem barakat','shereen','kathem','najwa karam','majed almohandes','amro diab'];
 console.log(mySingers);
 while(mySingers!='wael kfouri' && mySingers!='fayrouz' && mySingers!='umm kalthoum' && mySingers!='rashed almajed' && mySingers!='melhem barakat' && mySingers!='shereen' && mySingers!='kathem')
 {
 mySingers =prompt('please try again?').toLowerCase();
 }
if (mySingers=='wael kfouri' || mySingers=='fayrouz' || mySingers=='umm kalthoum' || mySingers=='rashed almajed' || mySingers=='melhem barakat' || mySingers=='shereen' || mySingers=='kathem')
 {
 alert ('thank you');
 rightAnswers++;
 }
 alert('your righanswers is :'+rightAnswers);