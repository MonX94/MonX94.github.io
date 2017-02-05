var input_date = prompt("Введите дату в формате dd/mm/yyyy, \n или dd-mm-yyyy, \n или dd:mm:yyyy, \n или же dd.mm.yyyy.\n dd - день, mm - месяц, yyyy - год");

var is_valid_input_test = /^\d{1,2}[./\-:]\d{1,2}[./\-:]\d{4}$/; //Проверяет, правильно ли написана дата. Но 33.33/3333 допустимы.
var is_valid_input = is_valid_input_test.test(input_date); // см сверху
do {
    if (is_valid_input) { //Если правильно
        var date_array = input_date.match(/\d{1,}/g); // [0] - день, [1] - месяц, а [2] - год. При 11.22.3344 будет 11, 22, 3344.
        var day = parseInt(date_array[0], 10); // Соответственно день
        var month = parseInt(date_array[1], 10); // месяц
        var year = parseInt(date_array[2], 10); // и год.
        if (year % 400 === 0) { // - Высокосен ли год?
            leap_year = true;
        } else if (year % 100 === 0) {
            leap_year = false;
        } else if (year % 4 === 0) {
            leap_year = true;
        } else{
            leap_year = false;
        }

        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) { //31 день в месяце
            days_in_month = 31;
        } else if (month === 4 || month === 6 || month === 9 || month === 11) { //30 дней в месяце
            days_in_month = 30;
        } else if (month === 2 && leap_year === false) { //Невысокосный февраль, 28 дней
            days_in_month = 28;
        } else if (month === 2 && leap_year === true) { //Высокосный февраль, 29 дней
            days_in_month = 29;
        } else {
            alert("Ошибка 2: Неправильный месяц. Проверьте написание месяца.");
            break;
        }

        if (day < 1 || day > days_in_month) {
            alert("Ошибка 3: Неправильный день. Проверьте день в дате, в феврале например 28 или 29 дней.");
            break;
        }

        next_day = GetNextDay(day, month, year)[0];
        next_month = GetNextDay(day, month, year)[1];
        next_year = GetNextDay(day, month, year)[2];

        month_names = [];
        month_names[0] = "января";
        month_names[1] = "февраля";
        month_names[2] = "марта";
        month_names[3] = "апреля";
        month_names[4] = "мая";
        month_names[5] = "июня";
        month_names[6] = "июля";
        month_names[7] = "августа";
        month_names[8] = "сентября";
        month_names[9] = "октября";
        month_names[10] = "ноября";
        month_names[11] = "декабря";
        next_month_index = next_month - 1; //Номер в списке

        alert("Следующий день - " + next_day + " " + month_names[next_month_index] + " " + next_year + " года");
    } else {
        alert("Ошибка 1: Неправильно введена дата. Проверьте написание даты.");
    }

} while (false);

function GetNextDay(day, month, year) {
    day++;
    if (day > days_in_month) {
        month++;
        day = 1;
    }
    if (month > 12) {
        year++;
        month = 1;
    }
    next_date = [day, month, year];
    return next_date;
}
