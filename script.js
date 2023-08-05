const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const imgList = ["dog", "cats", "hamster", "rabbit"];

let index = 0;
btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn-left")) {
      index--;
      if (index < 0) {
        index = imgList.length - 1;
      }
      container.style.background = `url(./images/${imgList[index]}.jpg)`;
      container.style.backgroundSize = "cover";
    } else {
      index++;
      if (index === imgList.length) {
        index = 0;
      }
      container.style.background = `url(./images/${imgList[index]}.jpg)`;
      container.style.backgroundSize = "cover";
    }
  });
});
