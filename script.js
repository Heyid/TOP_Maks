const user_name = (user) => {
    if (user != null) {
        alert("Привет," + user);
    }
    else {
        alert("Вы не ввели имя :(");

    }
}

const age = (age) => {
    const year = 2023;
    if (age != null) {
        let user_age = year - Number(age);
        alert("Ваш возраст:" + user_age);
    }
    else {
        alert("Вы не ввели год рождения :(");
    }
}

const perimetr = (dlina) => {
    if (dlina != null) {
        let perim = Number(dlina) * 4;
        alert("Периметр вашего квадрата равен: " + perim);
    } else {
        alert("Вы не ввели длину :(");
    }
}

const Socr = (radius) => {
    if (radius != null) {
        let ploshad = 3.14 * Number(radius) ** 2;
        alert("Площадь вашей окружности равна: " + ploshad);
    }
    else {
        alert("Вы не ввели радиус :(");
    }
}
const speed = (rasst, vremya) => {
    if (rasst != null && (vremya != null)) {
        let sspeed = Number(rasst) / Number(vremya);
        alert("Вам нужно ехать со скоростью: " + sspeed);

    }
    else {
        alert("Вы ввели данные неправильно");
    }
}

const converter = (dollars) => {
    if (dollars != null) {
        const euro = 0.927149 * dollars;
        alert("Ваша сумма в евро: " + euro.toFixed(2));
    } else {
        alert("Вы неправильно ввели сумму:");
    }
}

const memory = (gb) => {
    if (gb != null) {
        mb = Number(gb) * 1024;
        let files = mb / 820;
        alert("Поместится " + Math.floor(files) + " файл(ов)");
    }
    else {
        alert("Данные не введены :(");
    }
}

const chocolate = (money, price) => {
    if (money != null & price != null) {
        let count = money / price;
        let sdacha = money % price;
        alert("Вам хватит на " + Math.floor(count) + " штук");
        alert("У вас останется " + sdacha + " рублей");
    } else {
        alert("Данные не введены :(");
    }
}

const reverse = (numer) => {
    if (numer != null & numer.length == 3) {
        alert("Ваше число в реверсе: " + numer.split('').reverse().join(''));
    } else {
        alert("Данные введены неправильно :(");
    }
}

const isOdd = (num) => {
    if (num != null) {
        if (num % 2 == 0) {
            alert("Число четное");

        } else {
            alert("Число нечетное ");
        }
    } else {
        alert('Данные не введены :(')
    }
}



let user = prompt("Как вас зовут?");
user_name(user);
let yearBirth = prompt("Какой у вас год рождения?");
age(yearBirth);
let dlina = prompt("Введите длину стороны квадрата:");
perimetr(dlina);
let rad = prompt("Введите ваш радиус окружности: ");
Socr(rad);
let rasst = prompt("Введите расстояние в км между 2-мя городами:");
let vremya = prompt("За сколько часов хотите добраться?");
speed(rasst, vremya);
let dollars = prompt("Введите сумму в долларах:")
converter(dollars)
let gbs = prompt("Введите объем флэшки в ГБ");
memory(gbs);
let money = prompt("Введите сумму денег");
let price = prompt("Введите цену шоколадки");
chocolate(money, price);
let numer = prompt("Введите трехзначное число:");
reverse(numer);
let num = prompt("Введите число");
isOdd(num);