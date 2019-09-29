function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    } }

function* evenFibs() {
    let allFibs = fibs()
    while (true) {
        let curr = allFibs.next().value
        if ((curr % 2) == 0) {
            yield curr
        }
    }
}


let myEvenFibs = evenFibs();
let count = 6;
while (count --> 0) {
    console.log(myEvenFibs.next().value);
}



