/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Создайте функцию (isWeekend), которая принимает день недели (с вашего enum)
  // и возвращает boolean значение, указывающее, рабочий или выходной день.
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const today = DayOfWeek.Saturday;
const isTodayWeekend = isWeekend(today);

if (isTodayWeekend) {
  console.log("Сегодня выходной!");
} else {
  console.log("Сегодня рабочий день.");
}



// //Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}