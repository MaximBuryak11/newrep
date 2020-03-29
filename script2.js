let number;
number = 266219;
console.log(number);

let str = number.toString();
let m = 1;

for (let i = 0; i <str.length; i++){
    m*=Number(str[i]);
}
console.log(m);
console.log(m**3);
console.log((m**3).toString().substr(0,2));


