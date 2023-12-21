// const one = (age) => {
//     if (age != null) {
//         if (age <= 2) {
//             alert('Ребенок');
//         } else if (2 < age && age <= 18) {
//             alert("Подросток");
//         } else if (age <= 60 && age > 18) {
//             alert('Взрослый');

//         } else if (age > 60) {
//             alert("Пенсионер");
//         }
//     } else {
//         alert('Данные не введены')
//     }
// }
// let age = +prompt('Введите возвраст');
// one(age);


// const two = (number) => {
//     if (number != null) {
//         switch (number) {
//             case 0:
//                 alert(`!`);
//                 break;
//             case 1:
//                 alert(`@`);
//                 break;
//             case 2:
//                 alert(`#`);
//                 break;
//             case 3:
//                 alert(`$`);
//                 break;
//             case 4:
//                 alert(`%`);
//                 break;
//             case 5:
//                 alert(`^`);
//                 break;
//             case 6:
//                 alert(`&`);
//                 break;
//             case 7:
//                 alert(`*`);
//                 break;
//             case 8:
//                 alert(`(`);
//                 break;
//             case 9:
//                 alert(`)`);
//                 break;
//         }
//     } else {
//         alert(`Данные не введены`)
//     }

// }

// let num =+prompt(`Введите число от 0-9`);
// two(num);

// const three = (number) => {
//     if (number != null) {
//         let ans = false;
//         if (number[0] == number[2]){
//             ans = true;
//         }else if (number[0]==number[1]){
//             ans = true;
//         }else if (number[1]==number[2]){
//             ans = true;
//         }
//         if (ans==true){
//             alert(`У вас есть одинковые цифры`);
//         }else{
//             alert(`У вас нет одинаковых цифр`);
//         }
//     } else {
//         alert(`Данные не введены`)
//     }
// }

// let num3= prompt(`Введите 3-х значное число`);
// three(num3);


// const four = (year) => {
//     if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
//         alert(`Год високосный`);
//     }else{
//         alert(`Год не високосный`);
//     }
// }

// let year = prompt(`Введите год`);
// four(year);

// const five = (number) => {
//     let rev_number = number.split('').reverse().join('');
//     if (number == rev_number) {
//         alert(`Палиндром`);

//     } else {
//         alert(`Не палиндром`);
//     }
// }
// let num5 = prompt(`Введите 5-ти значное число`);
// five(num5);

// const six = (dollars, value) => {
//     if (value == 'EUR') {
//         let eur = 1.09 * dollars;
//         alert(`${eur} евро`)
//     } else if (value == 'UAN') {
//         let uan = 7.16 * dollars;
//         alert(`${uan} юаней`)
//     } else {
//         let azn = 1.70 * dollars;
//         alert(`${azn} Азрбайджанских манат`)
//     }
// }


// let dollars = +prompt(`Введите кол-во USD`);
// let value = prompt(`Выберите валюту "UAN" , "EUR" , "AZN" `).toUpperCase();
// six(dollars, value);

// const seven = (summ) => {
//     if (200 < summ && summ < 300) {
//         let sk = summ - (summ * 3) / 100;
//         alert(`Товар будет стоить ${sk}`);
//     } else if (300 < summ && summ < 500) {
//         let sk = summ - (summ * 5) / 100;
//         alert(`Товар будет стоить ${sk}`);
//     } else if (summ > 500) {
//         let sk = summ - (summ * 7) / 100;
//         alert(`Товар будет стоить ${sk}`);
//     }else{
//         return 0;
//     }
// }

// let summ = Number(prompt(`Введите сумму покупки`));
// seven(summ);

// const eight = (dl_ocr, perim) => {
//     let rad = dl_ocr / (2 * Math.PI); // Радиус окружности
//     let st_side = perim / 4; // Длина стороны квадрата
//     let area_ocr = Math.PI * rad * rad; // Площадь окружности
//     let area_square = st_side * st_side; // Площадь квадрата

//     if (area_ocr <= area_square) {
//         alert(`Окружность влезет`);
//     } else {
//         alert(`Окружность не влезет`);
//     }
// }

// let dl_ocr = +prompt(`Введите длину окружности`);
// let perim = +prompt(`Введите периметр квадрата`);
// eight(dl_ocr, perim);


// const nine=()=> {
//     let count = 0;

//     const askQuestion = (question, correctAnswer) => {
//         let userAnswer = prompt(question);
//         if (userAnswer === correctAnswer) {
//             count += 1;
//         }
//     }

//     askQuestion('Столица России', 'Москва');
//     askQuestion('HTML язык программирования?', 'нет');
//     askQuestion('Сколько месяцев в году?', '12');

//     alert(`У вас ${count} верных ответов`);
// }

// nine();

// function ten() {

//     var day = prompt("Введите день:");
//     var month = prompt("Введите месяц (в числовом формате):");
//     var year = prompt("Введите год:");
//     var currentDate = new Date(year, month - 1, day);


//     var nextDate = new Date(currentDate);
//     nextDate.setDate(currentDate.getDate() + 1);


//     function formatDate(date) {
//         var day = date.getDate();
//         var month = date.getMonth() + 1;
//         var year = date.getFullYear();


//         day = day < 10 ? "0" + day : day;
//         month = month < 10 ? "0" + month : month;

//         return day + "." + month + "." + year;
//     }


//     alert(
//         "Текущая дата: " +
//         formatDate(currentDate) +
//         "\nСледующая дата: " +
//         formatDate(nextDate)
//     );
// }


// ten();
