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

