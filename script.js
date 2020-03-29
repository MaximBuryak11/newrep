let money; 
let income; 
let addExpenses;
let deposit;
let mission;
let period;

money = 100;
income = 20;
addExpenses = 'Интернет, такси, коммуналка';
deposit = true;
mission = 1000;
period = 11;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
let budgetDay;
budgetDay = money/30;
console.log(budgetDay);
