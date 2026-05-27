
const methodBtn = document.querySelector(".method-card button");

methodBtn.addEventListener("click", () => {

    methodBtn.innerHTML = "Membuka...";
    
    setTimeout(() => {
        window.location.href = "../tugas web/pages/beranda.html";
    }, 1000);

});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});