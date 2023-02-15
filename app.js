(function () {
    const priceList = [0, 45.87, 92.98, 146.86, 213.65, 276.48];

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector("#monthlyInvestment").addEventListener("input", (e) => {
        document.querySelector('#result').innerText = '$' + (Number(e.target.value) + Number(priceList[document.querySelector("#tuitionYears").value]))
    })
    document.querySelector("#tuitionYears").addEventListener("change", (e) => {
        document.querySelector('#result').innerText = '$' + (priceList[Number(e.target.value)] + Number(document.querySelector("#monthlyInvestment").value))
    })
    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // })
})();
