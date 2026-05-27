// 1. FUNGSI UNTUK PINDAH TAB UTAMA
function openMateri(event, materiId) {
    // Sembunyikan semua konten materi
    const materiContent = document.querySelectorAll(".materi-content");
    materiContent.forEach(content => {
        content.classList.remove("active");
    });

    // Hilangkan status active di semua tombol tab
    const tabBtn = document.querySelectorAll(".tab-btn");
    tabBtn.forEach(button => {
        button.classList.remove("active");
    });

    // Tampilkan materi yang dipilih dan aktifkan tombolnya
    document.getElementById(materiId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 2. FUNGSI UNTUK SUB-METODE (Eliminasi, Substitusi, Grafik)
function toggleSubMetode(subId) {
    const subContent = document.querySelectorAll(".sub-content");
    subContent.forEach(content => {
        content.classList.remove("active-sub");
    });

    document.getElementById(subId).classList.add("active-sub");
}
// FUNCTIONAL TAB MATERI UTAMA
function openMateri(event, materiId) {
    const materiContent = document.querySelectorAll(".materi-content");
    materiContent.forEach(content => {
        content.classList.remove("active");
    });

    const tabBtn = document.querySelectorAll(".tab-btn");
    tabBtn.forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(materiId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// FUNCTIONAL SUB METODE (Eliminasi, Substitusi, Grafik)
function toggleSubMetode(subId) {
    const subContent = document.querySelectorAll(".sub-content");
    subContent.forEach(content => {
        content.classList.remove("active-sub");
    });

    document.getElementById(subId).classList.add("active-sub");
}

// ANIMASI SCROLL KARTU MATERI
const cards = document.querySelectorAll(".materi-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const posisi = card.getBoundingClientRect().top;
        const layar = window.innerHeight - 100;

        if (posisi < layar) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }
    });
});

// SETTINGAN INITIAL AWAL UNTUK ANIMASI
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease-out";
});

