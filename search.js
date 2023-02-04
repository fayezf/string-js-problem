const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tomay bolte parini.';

const doesExist = lyrics.includes('pakhi');
// console.log(doesExist);

// ---------------------------
//    indexOf


console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));
// 

if(lyrics.indexOf('sada') != -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it')
}


// startwith

console.log(lyrics.startsWith('Tumi'));

// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');
console.log(fileName);