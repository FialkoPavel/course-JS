let money = prompt('Ваш бюджет на месяц?', 0);
let time = prompt('Введите дату в формате YYYY-MM-DD', 0);
let article = prompt('Введите обязательную статью расходов в этом месяце', 0);
let cost = prompt('Во сколько обойдется?', 0);
let day;
let appData = {
	budget: money,
	timeData: time,
	expenses: {article, cost} ,
	income: [],
	savings: false
}
day = +money/30;

console.log(appData);
alert(day);