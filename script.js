"use strict";
const arr = [];
let count;
let running = true;
function init() {
  count = 0;
  loop();
}
function loop() {
  arr.unshift(count);
  count++;

  if (arr.length > 9) {
    arr.pop();
  }

  console.log(arr);

  if (running) {
    setTimeout(loop, 1000);
  }
}

document.addEventListener("DOMContentLoaded", init);
