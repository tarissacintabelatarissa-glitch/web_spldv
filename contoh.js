document.querySelectorAll('.btn-solusi').forEach(button => {
    button.addEventListener('click', function() {
        // Mengambil elemen panel jawaban yang ada tepat di bawah tombol ini
        const panel = this.nextElementSibling;
        
        // Toggle class 'show' untuk membuka/tutup jawaban
        panel.classList.toggle('show');
        
        // Ubah teks tombol sesuai status terbuka/tertutup
        if (panel.classList.contains('show')) {
            this.textContent = 'Sembunyikan Solusi';
            this.classList.add('active');
        } else {
            this.textContent = 'Lihat Solusi';
            this.classList.remove('active');
        }
    });
});