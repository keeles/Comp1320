const readline = require("readline-sync");
const labTwo = require("./lab-two");

function getDayOfTheWeekForUserDate() {

const year = readline.question("Please enter a year. ");
const month = readline.question("Please enter a month. ");
const day = readline.question("Please enter a date. ");

    labTwo.dayOfTheWeek(year,month,day);

    console.log(`${month} ${day}, ${year} was a ${weekDay}`);
    }

getDayOfTheWeekForUserDate();
labTwo.makeCalendar(2022); 