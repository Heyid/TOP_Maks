// const user_name = (user) => {
//     if (user != null) {
//         alert("Привет," + user);
//     }
//     else {
//         alert("Вы не ввели имя :(");

//     }
// }

// const age = (age) => {
//     const year = 2023;
//     if (age != null) {
//         let user_age = year - Number(age);
//         alert("Ваш возраст:" + user_age);
//     }
//     else {
//         alert("Вы не ввели год рождения :(");
//     }
// }

// const perimetr = (dlina) => {
//     if (dlina != null) {
//         let perim = Number(dlina) * 4;
//         alert("Периметр вашего квадрата равен: " + perim);
//     } else {
//         alert("Вы не ввели длину :(");
//     }
// }

// const Socr = (radius) => {
//     if (radius != null) {
//         let ploshad = 3.14 * Number(radius) ** 2;
//         alert("Площадь вашей окружности равна: " + ploshad);
//     }
//     else {
//         alert("Вы не ввели радиус :(");
//     }
// }
// const speed = (rasst, vremya) => {
//     if (rasst != null && (vremya != null)) {
//         let sspeed = Number(rasst) / Number(vremya);
//         alert("Вам нужно ехать со скоростью: " + sspeed);

// }
//     else {
//     alert("Вы ввели данные неправильно");
// }
// }

// const converter = (dollars) => {
//     if (dollars != null) {
//         const euro = 0.927149* dollars;
//         alert("Ваша сумма в евро: " + euro.toFixed(2));
//     } else {
//         alert("Вы неправильно ввели сумму:");
//     }
// }


// let user = prompt("Как вас зовут?");
// user_name(user);
// let yearBirth = prompt("Какой у вас год рождения?");
// age(yearBirth);
// let dlina = prompt("Введите длину стороны квадрата:");
// perimetr(dlina);
// let rad = prompt("Введите ваш радиус окружности: ");
// Socr(rad);
// let rasst = prompt("Введите расстояние в км между 2-мя городами:");
// let vremya = prompt("За сколько часов хотите добраться?");
// speed(rasst, vremya);
// let dollars = prompt("Введите сумму в долларах:")
// converter(dollars)