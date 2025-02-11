const { addMonths, format, compareAsc } = require("date-fns");
const { kebabCase } = require("lodash");
const date = new Date();
// console.log(format(date, "yyyy - MMM - dd HH:mm:ss"));

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
// dates.sort(compareAsc);
// console.log(dates.sort(compareAsc));
console.log(format(addMonths(date, 6), 10), "yyyy - MMM - dd HH:mm:ss");

// console.log(kebabCase("harry-potter"));
