let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {} ,
	income: [],
	savings: false
}

let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let a2 = prompt('Во сколько обойдется?', 0);
let a3 = prompt('Введите обязательную статью расходов в этом месяце', '');
let a4 = prompt('Во сколько обойдется?', 0);

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget/30);