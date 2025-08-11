// Menunggu hingga seluruh konten HTML dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================
    // BAGIAN 1: LOGIKA UNTUK FILTER KATALOG PRODUK
    // ==========================================================
    const pilihanKatalogSection = document.getElementById('pilihan-katalog');
    const daftarProdukSection = document.getElementById('daftar-produk');
    const tombolKembali = document.getElementById('tombol-kembali');
    const judulKategoriEl = document.getElementById('judul-kategori');
    const tombolKategori = document.querySelectorAll('.tombol-kategori');
    const semuaProduk = document.querySelectorAll('.produk-card');

    // Objek untuk menyimpan nama tampilan kategori yang lebih ramah
    const namaTampilanKategori = {
        basket: "Basketball (#KB)",
        futsal: "Futsal & Football (#KF)",
        running: "Running (#KR)",
        badminton: "Badminton (#KS)",
        tennis: "Tennis & Padel (#KT)",
        volley: "Volleyball (#KV)"
    };

    // Fungsi untuk menampilkan produk berdasarkan kategori yang dipilih
    function tampilkanProduk(kategoriDipilih) {
        pilihanKatalogSection.classList.add('hidden');
        daftarProdukSection.classList.remove('hidden');
        judulKategoriEl.textContent = namaTampilanKategori[kategoriDipilih];
        
        semuaProduk.forEach(produk => {
            if (produk.dataset.kategori === kategoriDipilih) {
                produk.classList.remove('hidden');
            } else {
                produk.classList.add('hidden');
            }
        });
    }

    // Tambahkan event listener ke setiap tombol kategori
    tombolKategori.forEach(tombol => {
        tombol.addEventListener('click', () => {
            const kategori = tombol.dataset.kategori;
            tampilkanProduk(kategori);
        });
    });

    // Tambahkan event listener untuk tombol kembali
    tombolKembali.addEventListener('click', () => {
        pilihanKatalogSection.classList.remove('hidden');
        daftarProdukSection.classList.add('hidden');
    });


    // ==========================================================
    // BAGIAN 2: LOGIKA UNTUK TOMBOL WHATSAPP MENGAMBANG (FAB)
    // ==========================================================
    const fabContainer = document.querySelector('.whatsapp-fab-container');
    const fabToggle = document.getElementById('whatsapp-fab-toggle');
    const backdrop = document.getElementById('backdrop');

    // Fungsi untuk membuka menu pilihan admin
    const openFabMenu = () => {
        fabContainer.classList.add('active');
        backdrop.classList.add('active');
    };

    // Fungsi untuk menutup menu pilihan admin
    const closeFabMenu = () => {
        fabContainer.classList.remove('active');
        backdrop.classList.remove('active');
    };

    // Event listener untuk tombol utama WhatsApp
    fabToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Mencegah klik menyebar ke elemen lain
        if (fabContainer.classList.contains('active')) {
            closeFabMenu();
        } else {
            openFabMenu();
        }
    });

    // Event listener untuk backdrop (area redup)
    backdrop.addEventListener('click', () => {
        closeFabMenu();
    });

});