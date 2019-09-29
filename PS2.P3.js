const input = [1,2,3,4,5,6,7];

const map = input.map(x => Math.pow(x, 3));

function* printer(map = []) {
    for (item of map) {
        yield item;
    }
}

const items = printer(map);

x = 7;

while (x --> 0) {
    console.log(items.next().value);
}