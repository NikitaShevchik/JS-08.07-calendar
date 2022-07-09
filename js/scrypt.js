"use strict"

const calendar = document.querySelector('.calendar');
const calendarDaysNumbers = calendar.querySelector('.calendar__numbers');

let todayDate = new Date(); // сегодня

let day = todayDate.getDate(); // число 31
let dayWeek = todayDate.getDay(); // 0-6 число берем из arrayDates.daysWeek[]
let month = todayDate.getMonth(); // 0-11 число берем из arrayDates.months[]
let year = todayDate.getFullYear(); // число 2022


let arrayDates = {
    daysWeek: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    daysNumbers: [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

}
console.log(day)
console.log(arrayDates.daysNumbers[month])
console.log(arrayDates.daysWeek[dayWeek])
console.log(arrayDates.months[month])
console.log(year)

console.log('февраль', arrayDates.daysNumbers[1][1])


// function calendarGenerator(day, dayWeek) {

// }
