const lyrics = 'Tumi bondhu kala pakhi ami jeno ki, bosonto kale tomay bolte parini.';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const char = lyrics.split('');
// console.log(char);
const partial = lyrics.slice(5, 9);
// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

// trim
const greeting = '  Hello World!  ';
// console.log(greeting);
// console.log(greeting.trim());

const lines = ['Tumi bondhu kala pakhi ami jeno ki','Bosonto kale tomay bolte parini', 'Sada sada kala', 'Rong jomeche sada kala.'];
const newSong = lines.join(', ');
console.log(newSong);