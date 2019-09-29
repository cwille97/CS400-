function* words(S = "") {
    let array = S.split(" ");
    for (const item of array) {
        yield item;
    }

}

sentence = words("All I know is something like a bird within her sang");
let x = 11;
while (x --> 0) {
    console.log(sentence.next().value);
}