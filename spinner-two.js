const array = ['\r|   ','\r/  ' ,'\r-   ' ,'\r\\   ', '\r|   ','\r/  ' ,'\r-   ' ,'\r\\   '];
let timing = 100;
const timer = function (array) {
  for (let i = 0; i < array.length; i++) {
    timing = 100 + 500 * i;
    setTimeout(() => {
      process.stdout.write(array[i]);
    }, timing);
  }
};
timer(array);
