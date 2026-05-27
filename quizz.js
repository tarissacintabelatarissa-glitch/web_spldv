// ============================================
//  DATA SOAL SPLDV — 10 Soal
//  Metode: Eliminasi, Substitusi, Grafik
// ============================================

var daftarSoal = [
    // ---- ELIMINASI ----
    {
        topik: "Eliminasi",
        metode: "elim",
        bagian: [
            "Diketahui SPLDV: 2x + y = 10 dan x + y = 7. Eliminasi variabel y menghasilkan x = ",
            null
        ],
        jawaban: ["3"],
        hint: "Kurangkan persamaan 2 dari persamaan 1: (2x+y) − (x+y) = 10 − 7",
        pembahasan: "(2x+y)−(x+y) = 10−7 → x = 3. Jadi x = 3.",
        nilai: 15
    },
    {
        topik: "Eliminasi",
        metode: "elim",
        bagian: [
            "Diketahui: 3x + 2y = 16 dan x + 2y = 8. Dengan eliminasi y, diperoleh x = ",
            null,
            " dan y = ",
            null
        ],
        jawaban: ["4", "2"],
        hint: "Kurangkan kedua persamaan: (3x+2y)−(x+2y) = 16−8 → 2x = 8",
        pembahasan: "2x = 8 → x = 4. Substitusi ke x+2y=8: 4+2y=8 → y=2.",
        nilai: 15
    },
    {
        topik: "Eliminasi",
        metode: "elim",
        bagian: [
            "Jika x − y = 2 dan x + y = 8, maka nilai x = ",
            null,
            " dan y = ",
            null
        ],
        jawaban: ["5", "3"],
        hint: "Jumlahkan kedua persamaan untuk mengeliminasi y, lalu kurangkan untuk mencari y",
        pembahasan: "Jumlah: 2x = 10 → x = 5. Kurang: 2y = 6 → y = 3.",
        nilai: 15
    },
    // ---- SUBSTITUSI ----
    {
        topik: "Substitusi",
        metode: "subs",
        bagian: [
            "Dari persamaan y = 2x dan 3x + y = 10, substitusi y = 2x ke persamaan kedua: 3x + 2x = 10, maka x = ",
            null
        ],
        jawaban: ["2"],
        hint: "5x = 10, bagikan kedua ruas dengan 5",
        pembahasan: "3x + 2x = 10 → 5x = 10 → x = 2. Maka y = 2(2) = 4.",
        nilai: 15
    },
    {
        topik: "Substitusi",
        metode: "subs",
        bagian: [
            "Diketahui x = y + 3 dan 2x − y = 8. Substitusi x ke persamaan kedua menghasilkan y = ",
            null,
            " dan x = ",
            null
        ],
        jawaban: ["2", "5"],
        hint: "Substitusi x = y+3 ke 2(y+3)−y = 8 → 2y+6−y = 8",
        pembahasan: "2(y+3)−y = 8 → y+6 = 8 → y = 2. Maka x = 2+3 = 5.",
        nilai: 15
    },
    {
        topik: "Substitusi",
        metode: "subs",
        bagian: [
            "Dari sistem: y = 3x − 1 dan 2x + y = 9. Substitusi y, diperoleh nilai x = ",
            null,
            " dan y = ",
            null
        ],
        jawaban: ["2", "5"],
        hint: "2x + (3x−1) = 9 → 5x − 1 = 9 → 5x = 10",
        pembahasan: "2x + 3x − 1 = 9 → 5x = 10 → x = 2. y = 3(2)−1 = 5.",
        nilai: 15
    },
    // ---- GRAFIK ----
    {
        topik: "Grafik",
        metode: "graf",
        bagian: [
            "Garis x + y = 6 memotong sumbu-x di titik (",
            null,
            ", 0) dan sumbu-y di titik (0, ",
            null,
            ")"
        ],
        jawaban: ["6", "6"],
        hint: "Sumbu-x: y=0, maka x=6. Sumbu-y: x=0, maka y=6",
        pembahasan: "Jika y=0: x=6 → (6,0). Jika x=0: y=6 → (0,6).",
        nilai: 15
    },
    {
        topik: "Grafik",
        metode: "graf",
        bagian: [
            "Garis 2x + y = 8 memotong sumbu-x di titik (",
            null,
            ", 0) dan sumbu-y di titik (0, ",
            null,
            ")"
        ],
        jawaban: ["4", "8"],
        hint: "Sumbu-x: y=0 → 2x=8. Sumbu-y: x=0 → y=8",
        pembahasan: "y=0: 2x=8 → x=4, titik (4,0). x=0: y=8, titik (0,8).",
        nilai: 15
    },
    {
        topik: "Grafik",
        metode: "graf",
        bagian: [
            "Dua garis berpotongan di satu titik berarti SPLDV memiliki ",
            null,
            " penyelesaian"
        ],
        jawaban: ["tepat satu"],
        hint: "Dua garis berpotongan = bertemu di satu titik saja",
        pembahasan: "Dua garis berpotongan hanya di satu titik → tepat satu penyelesaian.",
        nilai: 15
    },
    {
        topik: "Grafik",
        metode: "graf",
        bagian: [
            "Dua garis yang sejajar (tidak berpotongan) menunjukkan SPLDV ",
            null,
            " penyelesaian"
        ],
        jawaban: ["tidak memiliki"],
        hint: "Garis sejajar = tidak pernah bertemu = tidak ada titik potong",
        pembahasan: "Garis sejajar tidak punya titik potong → SPLDV tidak memiliki penyelesaian.",
        nilai: 15
    }
];

// ============================================
//  STATE QUIZ
// ============================================
var skrg = 0;
var skor = 0;
var benar = 0;
var salah = 0;
var hintDipakai = 0;
var inputEls = [];
var timerInterval = null;
var waktuSisa = 30;
var sudahCek = false;
var hintSudahDipakai = false;
var totalWaktu = 30;

// ============================================
//  FUNGSI UTAMA
// ============================================

function mulai() {
    skrg = 0; 
    skor = 0; 
    benar = 0; 
    salah = 0; 
    hintDipakai = 0;
    document.getElementById('layar-mulai').style.display = 'none';
    document.getElementById('layar-soal').style.display = 'block';
    tampilSoal();
}

function tampilSoal() {
    sudahCek = false;
    hintSudahDipakai = false;
    waktuSisa = totalWaktu;
    inputEls = [];

    var soal = daftarSoal[skrg];

    // Update info bar atas kuis
    document.getElementById('info-soal').textContent = 'Soal ' + (skrg + 1) + ' / ' + daftarSoal.length;
    document.getElementById('skor-chip').innerHTML = '<i class="fas fa-star"></i> ' + skor;

    // Set nama topik & badge metode kuis
    document.getElementById('topik-badge').textContent = soal.topik;
    var metodeBadge = document.getElementById('metode-badge');
    var labelMetode = {
        elim: 'Metode Eliminasi',
        subs: 'Metode Substitusi',
        graf: 'Metode Grafik'
    };
    metodeBadge.textContent = labelMetode[soal.metode] || soal.topik;
    metodeBadge.className = 'metode-badge ' + soal.metode;

    // Hitung progress bar persen
    var persen = Math.round(((skrg + 1) / daftarSoal.length) * 100);
    document.getElementById('progress-bar').style.width = persen + '%';
    document.getElementById('progress-label').textContent = persen + '%';

    // Reset teks area bantuan/hint
    document.getElementById('teks-hint').textContent = '';
    document.getElementById('info-hint').textContent = '';
    var btnHint = document.getElementById('btn-hint');
    btnHint.className = 'hint-chip';
    btnHint.textContent = 'Tampilkan Hint';

    // Sembunyikan dan bersihkan kotak pembahasan jawaban
    var kotak = document.getElementById('kotak-ket');
    kotak.className = 'kotak-ket';
    kotak.innerHTML = '';

    // Atur tombol cek agar aktif kembali
    var btnCek = document.getElementById('btn-cek');
    var btnLanjut = document.getElementById('btn-lanjut');
    btnCek.style.display = 'inline-flex';
    btnCek.disabled = false;
    btnLanjut.style.display = 'none';

    // Render text soal & buat input box otomatis pada bagian data array bermutasi 'null'
    var wrap = document.getElementById('teks-soal');
    wrap.innerHTML = '';
    var inputIdx = 0;

    soal.bagian.forEach(function(bag) {
        if (bag === null) {
            var inp = document.createElement('input');
            inp.type = 'text';
            inp.className = 'blank-input';
            inp.placeholder = '...';
            inp.setAttribute('data-idx', inputIdx);
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') cekJawaban();
            });
            wrap.appendChild(inp);
            inputEls.push(inp);
            inputIdx++;
        } else {
            var span = document.createElement('span');
            span.textContent = bag;
            wrap.appendChild(span);
        }
    });

    if (inputEls.length > 0) inputEls[0].focus();

    // Jalankan mesin countdown timer kuis per-soal
    clearInterval(timerInterval);
    updateTimer();
    timerInterval = setInterval(function() {
        waktuSisa--;
        updateTimer();
        if (waktuSisa <= 0) {
            clearInterval(timerInterval);
            if (!sudahCek) waktuHabis();
        }
    }, 1000);
}

function updateTimer() {
    var angka = document.getElementById('timer-angka');
    var chip = document.getElementById('timer-chip');
    var ring = document.getElementById('timer-ring-progress');
    var circumference = 100.5;
    var offset = circumference - (waktuSisa / totalWaktu) * circumference;

    angka.textContent = waktuSisa;
    ring.style.strokeDashoffset = offset;

    if (waktuSisa <= 10) {
        chip.className = 'timer-chip merah';
    } else {
        chip.className = 'timer-chip';
    }
}

function pakaiHint() {
    if (hintSudahDipakai || sudahCek) return;
    hintSudahDipakai = true;
    hintDipakai++;
    document.getElementById('teks-hint').textContent = daftarSoal[skrg].hint;
    var btnHint = document.getElementById('btn-hint');
    btnHint.className = 'hint-chip digunakan';
    btnHint.textContent = 'Hint dipakai (−5 poin)';
}

function cekJawaban() {
    if (sudahCek) return;
    sudahCek = true;
    clearInterval(timerInterval);

    document.getElementById('btn-cek').style.display = 'none';
    var btnLanjut = document.getElementById('btn-lanjut');
    btnLanjut.style.display = 'inline-flex';

    var soal = daftarSoal[skrg];
    var semuaBenar = true;

    inputEls.forEach(function(inp, i) {
        var nilai = inp.value.trim().toLowerCase().replace(/\s+/g, ' ');
        var jawaban = soal.jawaban[i].toLowerCase().replace(/\s+/g, ' ');

        // Normalisasi tanda karakter minus strip agar seragam
        nilai = nilai.replace(/−/g, '-');
        jawaban = jawaban.replace(/−/g, '-');

        inp.disabled = true;

        if (nilai === jawaban) {
            inp.classList.add('benar');
        } else {
            inp.classList.add('salah');
            semuaBenar = false;
        }
    });

    var kotak = document.getElementById('kotak-ket');
    var poinSoal = soal.nilai - (hintSudahDipakai ? 5 : 0);

    if (semuaBenar) {
        benar++;
        skor += poinSoal;
        document.getElementById('skor-chip').innerHTML = '<i class="fas fa-star"></i> ' + skor;
        kotak.className = 'kotak-ket tampil benar';
        kotak.innerHTML = '<i class="fas fa-check-circle"></i><span>Benar! +' + poinSoal + ' poin. ' + soal.pembahasan + '</span>';
    } else {
        salah++;
        kotak.className = 'kotak-ket tampil salah';
        kotak.innerHTML = '<i class="fas fa-times-circle"></i><span>Kurang tepat. ' + soal.pembahasan + '</span>';
    }
}

function waktuHabis() {
    sudahCek = true;
    salah++;

    document.getElementById('btn-cek').style.display = 'none';
    var btnLanjut = document.getElementById('btn-lanjut');
    btnLanjut.style.display = 'inline-flex';

    inputEls.forEach(function(inp) {
        inp.disabled = true;
        inp.classList.add('salah');
    });

    var kotak = document.getElementById('kotak-ket');
    var soal = daftarSoal[skrg];
    kotak.className = 'kotak-ket tampil salah';
    kotak.innerHTML = '<i class="fas fa-clock"></i><span>Waktu habis! ' + soal.pembahasan + '</span>';
}

function soalBerikutnya() {
    skrg++;
    if (skrg < daftarSoal.length) {
        tampilSoal();
    } else {
        tampilHasil();
    }
}

function tampilHasil() {
    clearInterval(timerInterval);
    document.getElementById('layar-soal').style.display = 'none';
    var layarHasil = document.getElementById('layar-hasil');
    layarHasil.style.display = 'block';

    // Suntik data statistik angka akhir ke elemen layar skor akhir
    document.getElementById('nilai-final').textContent = skor;
    document.getElementById('sf-benar').textContent = benar;
    document.getElementById('sf-salah').textContent = salah;
    document.getElementById('sf-hint').textContent = hintDipakai;

    var pesanFinal = document.getElementById('pesan-final');
    if (skor >= 120) {
        pesanFinal.textContent = "Luar biasa! Kamu sudah sangat menguasai materi SPLDV!";
        document.getElementById('ikon-final').textContent = "🏆";
    } else if (skor >= 75) {
        pesanFinal.textContent = "Kerja bagus! Sedikit latihan lagi kamu pasti bisa sempurna.";
        document.getElementById('ikon-final').textContent = "⭐";
    } else {
        pesanFinal.textContent = "Jangan menyerah, coba ulangi lagi materi dan kuisnya ya!";
        document.getElementById('ikon-final').textContent = "📚";
    }

    // Animasi progress melingkar pada SVG ring nilai kuis
    var circumference = 427;
    var circle = document.getElementById('nilai-ring-circle');
    var persen = skor / 150;
    if (persen > 1) persen = 1;
    if (persen < 0) persen = 0;
    var offset = circumference - (persen * circumference);
    
    setTimeout(function() {
        circle.style.transition = 'stroke-dashoffset 1s ease-out';
        circle.style.strokeDashoffset = offset;
    }, 200);
}

// Fungsi untuk mereset seluruh state kuis ketika mengulang kuis dari awal
function ulangi() {
    document.getElementById('layar-hasil').style.display = 'none';
    document.getElementById('layar-mulai').style.display = 'block';
    
    var circle = document.getElementById('nilai-ring-circle');
    circle.style.transition = 'none';
    circle.style.strokeDashoffset = 427;
}