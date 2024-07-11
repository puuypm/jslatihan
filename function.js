function sum(name, ...data) {
    let total = 0
    for (const item of data) {
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

sum('Orance', 2, 3, 4, 6, 7, 8);
sum('Apple', 5, 5, 6, 7, 5, 6);
sum('Banana', 9, 5, 2, 3, 4);

let say = sayHello;
function giveMeName(callback){
    callback("Eko");
}

giveMeName((name)=>console.info(`Hello ${name}`));