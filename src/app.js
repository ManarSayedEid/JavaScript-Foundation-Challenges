// Write a function that receives month number and year as parameters and returns
// the number of days for the given month.
// The function should compute correct days of February.

// from 1 to 7 odd number has 31 DaysOfMonth, even number has 30
// from 8 to 12 even number has 31 DaysOfMonth, odd number has 30 days
// if it is FEBRUARY then it has 28 days unless it is a leap year

function DaysOfMonth(month, year) {

    // february
    if (month === 2 && (year % 4) === 0) {
        return 29;
    }

    if (month === 2 && (year % 4) !== 0) {
        return 28;
    }

    // other months
    if (month < 8) {
        if (month % 2 === 0)
            return 30
        else
            return 31;
    }

    if (month > 7) {
        if (month % 2 === 0)
            return 31
        else
            return 30;
    }

}
