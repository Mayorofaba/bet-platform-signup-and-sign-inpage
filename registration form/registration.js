
const form = document.querySelector("form")

const backBtn = document.querySelector(".backbtn");
const nextBtn = document.querySelector(".nextbtn");


const allInputs = document.querySelectorAll(".first input")

nextBtn.addEventListener("click", function () {
    allInputs.forEach(function (input) {
        if (input.value != "") {
            form.classList.add("displaypage");



        } else {
            form.classList.remove("displaypage");

        }

    })
})



backBtn.addEventListener("click", function () {
    form.classList.remove("displaypage")

})
