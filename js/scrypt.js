"use strict"

const calendar = document.querySelector('.calendar');
const calendarDaysNumbers = calendar.querySelector('.calendar__numbers');
const yearAndMonthDisplay = calendar.querySelector('.calendar__date');
const calendarNavigator = document.querySelector('.navigator')
const arrowPrev = calendarNavigator.querySelector('.navigator__left');
const arrowNext = calendarNavigator.querySelector('.navigator__right');

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

function calendarGenerator(month, day, totalMonths, totalDaysNumbers) {
    yearAndMonthDisplay.innerHTML = `${totalMonths[month]}, ${year}`
    var daysNumberInMonth = 0;
    if (month == 1) {
        if (year % 4 == 0) {
            daysNumberInMonth = totalDaysNumbers[month][1]
        } else {
            daysNumberInMonth = totalDaysNumbers[month][0]
        }
    } else {
        daysNumberInMonth = totalDaysNumbers[month];
    }
    calendarDaysNumbers.innerHTML = ''
    for (let i = 1; i <= daysNumberInMonth; i++) {
        calendarDaysNumbers.innerHTML += `<div class="numbers__item">${i}</div>`
    }
    const allItems = calendar.querySelectorAll('.numbers__item');
    allItems[0].style.gridColumnStart = firstDayMonthDayweek(month);
    if (month == todayDate.getMonth()) {
        allItems[day - 1].classList.add('_today')
    }
    function firstDayMonthDayweek(month) {
        let monthName = arrayDates.monthsEng[month];
        let firstDayWeek = (new Date(`${monthName} 1, ${year}`)).getDay()
        if (firstDayWeek == 0) {
            firstDayWeek = 7;
        }
        return firstDayWeek;
    }
}

calendarGenerator(month, day, arrayDates.months, arrayDates.daysNumbers)

arrowNext.addEventListener('click', function () {
    month = month + 1;
    if (month > 11){
        month = 0;
        year++;
    }
    calendarGenerator(month, day, arrayDates.months, arrayDates.daysNumbers)
})
arrowPrev.addEventListener('click', function(){
    month = month - 1;
    if (month < 0){
        month = 11;
        year--;
    }
    calendarGenerator(month, day, arrayDates.months, arrayDates.daysNumbers)
})

// сделать нормальное выравнивание дней