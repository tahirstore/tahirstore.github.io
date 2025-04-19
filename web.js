let input = document.querySelector(".nav-search input");
let titles = document.querySelectorAll(".box-content h2");
let heroSec = document.querySelector(".hero-section");

input.addEventListener('keyup', () => {
    let value = input.value.toLowerCase();
    if(value.length > 0) {
        titles.forEach((title) => {
            let text = title.innerText.toLowerCase();
            if (text.includes(value)) {
                heroSec.style.display = "none";
                title.parentElement.parentElement.style.display = "block";
                
            } else {
                title.parentElement.parentElement.style.display = "none";
                // heroSec.style.display = "block";
            }
        });
    }
    else {
        titles.forEach((title) => {
            title.parentElement.parentElement.style.display = "block";
        });
    }
  });
  