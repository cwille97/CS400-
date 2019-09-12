// Write a function that takes a string as its input and returns a new string that contains
// all of the letters in the original string, but in alphabetical order.
// Ignore punctuation and numbers. Test your function using the string ‘supercalifragilisticexpialidocious’.


const problem1 = str => {
    let array = [str.length];
    for (let x = 0; x < str.length; x++) {
        array[x] = str.substring(x,x+1);
    }
    array.sort();
    let ret = "";
    for (let x = 0; x < str.length; x++) {
        ret += array[x];
    }
    return ret;

};

console.log(`Alphabetical order: ${problem1('supercalifragilisticexpialidocious')}`);
