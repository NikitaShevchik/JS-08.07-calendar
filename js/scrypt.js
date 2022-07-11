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
    monthsEng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    daysNumbers: [31, [28, 29], 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}










function firstDayMonthDayweek() {
    let monthName = arrayDates.monthsEng[month];
    let firstDayWeek = (new Date(`${monthName} 1, ${year}`)).getDay()
    if (firstDayWeek == 0) {
        firstDayWeek = 7;
    }
    return firstDayWeek;
}

function calendarGenerator(month, day, dayWeek, totalMonths, totalDaysNumbers) {
    var daysNumberInMonth = totalDaysNumbers[month];
    for (let i = 1; i <= daysNumberInMonth; i++) {
        calendarDaysNumbers.innerHTML += `<div class="numbers__item">${i}</div>`
    }
    const allItems = calendar.querySelectorAll('.numbers__item');
    allItems[0].style.gridColumnStart = firstDayMonthDayweek();
}

calendarGenerator(month, day, dayWeek, arrayDates.months, arrayDates.daysNumbers)

// сделать нормальное выравнивание дней