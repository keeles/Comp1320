function findMonthCode(month) {

    if (month == "January") {
        return(1)
    } if (month == "February") {
        return(4)
    } if (month == "March") {
        return(4)
    } if (month == "April") {
        return(0)
    } if (month == "May") {
        return(2)
    } if (month == "June") {
        return(5)
    } if (month == "July") {
        return(0)
    } if (month == "August") {
        return(3)
    } if (month == "September") {
        return(6)
    } if (month == "October") {
        return(1)
    } if (month == "November") {
        return(4)
    } if (month == "December") {
        return(6)
    }

 }


function whichDayOfWeek(dayOfWeekCode) {

    const sevenDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    
    for (let i=0; i < sevenDays.length; i++) {
        if (i == dayOfWeekCode) {
            return (sevenDays[i]);
        } 
    }
}

function findDayOfWeekCode(twoDigitsDivide, twoDigitsRem, remFour, dayOfMonth, monthCode) {

    return(((twoDigitsDivide) + (twoDigitsRem) + (remFour) + (dayOfMonth) + (monthCode)) % 7);

}

function isLeapYear(year, month) {

    if (year % 4 == 0 && (month == "January" || month == "February")) {
        return(1)
    } else {
        return(0)
    }
}

function findYearCode(year) {

       if (2100 <= year && year < 2200) {
        return(4)
    }  if (2000 <= year && year < 2100) {
        return(6)
    } if (1900 <= year && year < 2000) {
        return(0)
    } if (1800 <= year && year < 1900) {
        return(2)
    } if (1700 <= year && year < 1800) {
        return(4)
    } if (1600 <= year && year < 1700) {
        return(6)
    }

}

function dayOfTheWeek(year, month, day){

    const yearString = year.toString(); 
    const lastTwoDigitsYear = yearString.slice(-2);
    const twoDigitsDivide = parseInt(lastTwoDigitsYear / 12);
    const twoDigitsRem = parseInt(lastTwoDigitsYear % 12);
    const remFour = parseInt(twoDigitsRem / 4);
    const dayOfMonth = parseInt(day);
    const monthCode = findMonthCode(month) + findYearCode(year) - isLeapYear(year, month);
    const dayOfWeekCode = findDayOfWeekCode(twoDigitsDivide, twoDigitsRem, remFour, dayOfMonth, monthCode);
    
    weekDay = whichDayOfWeek(dayOfWeekCode);
    
    return(month, day, year, weekDay);
    }

function makeCalendar(year) {

    let whichMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    whichMonth.forEach(month => {
    
        const month30Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        const month31Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        const month28Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    
        if (month == "April" || month == "June" || month == "September" || month == "November") {
            for (i = 0; i < month30Days.length; i++) {
                weekDay = dayOfTheWeek(year,month,i+1);
                console.log(`${whichMonth.indexOf(month)+1} - ${i+1} - ${year} is a ${weekDay}`);
            } 
        } if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
            for (i = 0; i < month31Days.length; i++) {    
                weekDay = dayOfTheWeek(year,month,i+1);     
                console.log(`${whichMonth.indexOf(month)+1} - ${i+1} - ${year} is a ${weekDay}`);
            } 
        } if (month == "February") {
            for (i =0; i < month28Days.length; i++) {
                weekDay = dayOfTheWeek(year,month,i+1);
                console.log(`${whichMonth.indexOf(month)+1} - ${i+1} - ${year} is a ${weekDay}`);
            } 
        }
    });
    }
    
module.exports = {findMonthCode, whichDayOfWeek, findDayOfWeekCode, isLeapYear, findYearCode, dayOfTheWeek, makeCalendar};


