let interval = 150;
let counters = document.getElementsByClassName("count");
let facebook = 0;
let twitter = 0;
let inst = 0;
let youtube = 0;

let count = function () {
  if (interval > 1) interval -= 1;
  if (counters[0].innerHTML != "9000") {
    youtube += 1;
    counters[0].innerHTML = youtube;
  }
  if (counters[1].innerHTML != "1000") {
    inst += 1;
    counters[1].innerHTML = inst;
  }
  if (counters[2].innerHTML != "7000") {
    facebook += 1;
    counters[2].innerHTML = facebook;
  }
  if (counters[3].innerHTML != "5000") {
    twitter += 1;
    counters[3].innerHTML = twitter;
  }
  setTimeout(count, interval);
};

setTimeout(count, interval);
