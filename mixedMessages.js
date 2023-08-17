
function messageBox(){
let messages=[arrMessage1,arrMessage2,arrMessage3]

let random = Math.floor(Math.random()*messages.length);

return messages[random];

};

const arrMessage1=["LOL – laughing out loud.",'OMG – oh my god',"IMHO – in my humble opinion","BTW – by the way.","IDK – I don't know.","LMK – let me know."];

const arrMessage2 = ['Impossible is for the unwilling.',"No pressure, no diamonds.","Dream big and dare to fail.","Excuses are the nails used to build a house of failure."];

const arrMessage3=['Representative Binks of Naboo.','Something’s wrongo here.','Whaten dey speaking?', 'Hmmm—yousa point is well seen'];

function randomMsg(messageBox){
    let textArray=messageBox;
let msgNum= Math.floor(Math.random()*(textArray.length))

    console.log(`This message has been taken from three different arrays: ${arrMessage1[msgNum]} ${arrMessage2[msgNum]} ${arrMessage3[msgNum]}`);
}

randomMsg(messageBox);




