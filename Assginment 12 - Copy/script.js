let increaseBtns = document.querySelectorAll(".add");
let decreaseBtns = document.querySelectorAll(".decrease");


increaseBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        let currentCount = this.nextElementSibling;
        let newAmuont = parseInt(currentCount.textContent);
        if (newAmuont >= 1 && newAmuont < 9) {
            currentCount.textContent = newAmuont + 1;
        }
    })
})

decreaseBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        let currentCount = this.previousElementSibling;
        let newAmuont = parseInt(currentCount.textContent);
        if (newAmuont > 1 && newAmuont <= 9) {
            currentCount.textContent = newAmuont - 1;
        }
    })
})