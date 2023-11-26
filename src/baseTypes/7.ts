/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
//1варіант
// enum DeysWeek {
//   MONDAY,
//   TUESDAY,
//   WEDNESDAY,
//   THURSDAY,
//   FRIDAY,
//   SATURDAY,
//   SANDAY,
// }
// function isWeekend(day: DeysWeek):boolean {
//   return(day>=5);
// }



//2варіант
enum DeysWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SANDAY,
}
function isWeekend(day: DeysWeek):boolean {
  return((day===DeysWeek.SATURDAY)||(day===DeysWeek.SANDAY));
}
//перевірка
// let today = DeysWeek.FRIDAY;
// let isTodayWeekend = isWeekend(today);
// console.log(isTodayWeekend); 
// today = DeysWeek.SANDAY;
// isTodayWeekend = isWeekend(today);
// console.log(isTodayWeekend); 