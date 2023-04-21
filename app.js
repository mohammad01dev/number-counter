let increase = document.querySelector(".Increase");
let reset = document.querySelector(".Reset");
let decrease = document.querySelector(".Decrease");
let counterNum = document.querySelector(".number");
let start = document.querySelector(".Start");

increase.addEventListener("click", function () {
  let increased = counterNum.innerHTML;
  ++increased;
  if (increased > 0) {
    counterNum.innerHTML = increased;
    counterNum.style.color = "rgb(53, 195, 112)";
  } else if (increased == 0) {
    counterNum.innerHTML = increased;
    counterNum.style.color = "black";
  } else {
    counterNum.innerHTML = increased;
    counterNum.style.color = "rgb(244, 41, 41)";
  }
});

reset.addEventListener("click", function () {
  counterNum.innerHTML = 0;
  counterNum.style.color = "black";
});

decrease.addEventListener("click", function () {
  let decreased = counterNum.innerHTML;
  --decreased
  if (decreased < 0) {
    counterNum.innerHTML = decreased;
    counterNum.style.color = "rgb(244, 41, 41)";
  } else if (decreased == 0) {
    counterNum.innerHTML = decreased;
    counterNum.style.color = "black";
  } else {
    counterNum.innerHTML = decreased;
    counterNum.style.color = "rgb(53, 195, 112)";
  }
});

start.addEventListener("click", function (ev) {
  
  
  if (ev.target.className == "Start") {
    let autoTimer = setInterval(() => {
      let auto = counterNum.innerHTML;
      ++auto;
      if (auto < 0) {
        counterNum.innerHTML = auto;
        counterNum.style.color = "rgb(244, 41, 41)";
      } else if (auto == 0) {
        counterNum.innerHTML = auto;
        counterNum.style.color = "black";
      } else {
        counterNum.innerHTML = auto;
        counterNum.style.color = "rgb(53, 195, 112)";
      }
    }, 1000);

    if (counterNum.innerHTML > 101) {
        clearInterval(autoTimer)
    }

  }

  
});