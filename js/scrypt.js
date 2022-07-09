"use strict"

const calendar = document.querySelector('.calendar');
const calendarDaysNumbers = calendar.querySelector('.calendar__numbers');

let todayDate = new Date(); // сегодня

let dateMonbth = new Date();
let kkk = dateMonbth.getDay()
console.log(dateMonbth)

let day = todayDate.getDate(); // число 31
let dayWeek = todayDate.getDay(); // 0-6 число берем из arrayDates.daysWeek[]
let month = todayDate.getMonth(); // 0-11 число берем из arrayDates.months[]
let year = todayDate.getFullYear(); // число 2022


let arrayDates = {
    daysWeek: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    daysNumbers: [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

}
// console.log(day)
// console.log(arrayDates.daysNumbers[month])
// console.log(arrayDates.daysWeek[dayWeek])
// console.log(arrayDates.months[month])
// console.log(year)
// console.log('февраль', arrayDates.daysNumbers[1][1])


function calendarGenerator(month, day, dayWeek, totalMonths, totalDaysNumbers) {
    var daysNumberInMonth = totalDaysNumbers[month];
    console.log(daysNumberInMonth);
    for (let i = 1; i <= daysNumberInMonth; i++) {
        calendarDaysNumbers.innerHTML += `<div class="numbers__item">${i}</div>`
    }
    const allItems = calendar.querySelectorAll('.numbers__item');
    for (let item of allItems) {
        if (item.innerHTML == day) {
            console.log(dayWeek)
            item.style.gridColumnStart = dayWeek
        }
    }
}

calendarGenerator(month, day, dayWeek, arrayDates.months, arrayDates.daysNumbers)

// сделать нормальное выравнивание дней