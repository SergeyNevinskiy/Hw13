const num = +prompt("Введите число");
let minDev = 0;

if (num <= 1) {
    console.log("NaN");
} else {
    for (let i = 2; i < num; i++) {
        if (num%i === 0) {
            minDev = i;
            console.log(`Минимальный делитель: ${minDev}`);
            break;
        } 
}
if (minDev === 0) {
console.log(`Число ${num} простое, минимальный делитель само число.`);
}
}