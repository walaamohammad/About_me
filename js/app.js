'use strict'
let userName = prompt('please enter your name:');
console.log(userName);
alert ( 'welcom'+''+userName);
let myTown =prompt('am I from amman?').toLowerCase;
console.log(myTown);
if (myTown==='yes'|| myTown==='y'){
    alert ('yes I live in Amman');
console.log('i love amman');
} 
else if (myTown==='no' || myTown==='n')
{
    alert('I live in amman ');
}

let myStudy=prompt('am I study statistics?').toLowerCase;
console.log(myStudy);
if (myStudy==='yes' || myStudy==='y'){
    alert ('yes I study statistics');
    console.log('i love statistics');
}
else if (myStudy==='no' || myStudy==='n'){
alert ('read my biography ');
}
let myUniversity = prompt('is my university is JUST?').toLowerCase;
console.log(myUniversity);
if(myUniversity==='yes' || myUniversity==='y'){
    alert ('No my university is al yarmouk');
}
else if (myUniversity==='no' || myUniversity==='n')
{
    alert ('your answer right');
    console.log ('my university is yarmouk');
}
let mySkill =prompt('Do I have computer skills?').toLowerCase;
console.log(mySkill);
if (mySkill==='yes' || mySkill==='y'){
    alert ('yes I have this skill');
    console.log('love computer ');
}
else if (mySkill==='no' || mySkill==='n'){
    alert ('no I  have this skill');
}

let myExperience =prompt('I have any experience?').toLowerCase;
console.log(myExperience);
if (myExperience==='yes' || myExperience==='y'){
    alert ('no I dont have any experience');

}
else if (myExperience==='no'|| myExperience==='n'){
    alert ('that is right ');
    console.log('i hope get any chance');
}
alert ('goodbye'+''+userName);