const problem3 = (str, func) => func(str);

/* const test1 = problem3('supercalifragilisticexpialidocious', (function(str) {
    let array = [str.length];
    let cursor = 0;
    for (let x = 0; x < str.length; x++) {
        if (str.substring(x, x+1) == 'c') {
            cursor++;
        }
        array[cursor] += str.substring(x, x+1);
    }
})('supercalifragilisticexpialidocious'));

const test2 = problem3('supercalifragilisticexpialidocious', (function(str) {
    const object = {
        originalString: str,
        modifiedString: '',
        numberReplaced: 0,
        length: str.length,
    }
    let array = [str.length];
    for (let x = 0; x < str.length; x++) {
        let char = str.substring(x, x+1);
        if (char == 'a') {
            array[x] = 'A';
            object.numberReplaced++;
        }
        else {
            array[x] = char;
        }
    }
    for (let x = 0; x < str.length; x++) {
        object.modifiedString += array[x];
    }
    console.log('original string: ' + object.originalString);
    console.log('modified string: ' + object.modifiedString);
    console.log('numberReplaced: ' + object.numberReplaced);
    console.log('length: ' + object.length);
})('supercalifragilisticexpialidocious'));

*/
const str = 'supercalifragilisticexpialidocious';
const test1 = problem3(str, func => {
    let array = [str.length];
    array[0] = '';
    let cursor = 0;
    for (let x = 0; x < str.length; x++) {
        if (str.substring(x, x+1) == 'c') {
            cursor++;
            array[cursor] = '';
        }
        array[cursor] += str.substring(x, x+1);
    }
    return array;
});
console.log(test1);
console.log('');

const test2 = problem3(str, func => {
    const object = {
        originalString: str,
        modifiedString: '',
        numberReplaced: 0,
        length: str.length,
    }
    let array = [str.length];
    for (let x = 0; x < str.length; x++) {
        let char = str.substring(x, x+1);
        if (char == 'a') {
            array[x] = 'A';
            object.numberReplaced++;
        }
        else {
            array[x] = char;
        }
    }
    for (let x = 0; x < str.length; x++) {
        object.modifiedString += array[x];
    }
    console.log('{');
    console.log('   originalString: ' + object.originalString);
    console.log('   modifiedString: ' + object.modifiedString);
    console.log('   numberReplaced: ' + object.numberReplaced);
    console.log('   length:         ' + object.length);
    console.log('}');
});
