ADMIGI SOLUTION — Website
Website statis responsif untuk ADMIGI SOLUTION, dibuat dengan HTML5, CSS3, dan JavaScript murni agar mudah dikelola dan dipublikasikan melalui GitHub Pages.
Struktur
index.html — konten, SEO dasar, struktur halaman, formulir, portofolio, FAQ.
style.css — warna, layout, responsivitas, dan visual.
script.js — menu mobile, filter portofolio, dialog detail, WhatsApp, validasi formulir, tahun copyright.
assets/ — tempat menyimpan logo, gambar, dan karya portofolio Anda.
Menjalankan secara lokal
Ekstrak ZIP ini.
Buka folder admigi-solution.
Buka index.html di browser. Semua fitur dasar berjalan tanpa backend.
Untuk pengalaman pengembangan yang lebih konsisten, gunakan ekstensi Live Server di Visual Studio Code dan pilih Open with Live Server.
Publikasi gratis melalui GitHub Pages
Masuk ke GitHub dan buat repository baru, misalnya admigi-solution.
Unggah index.html, style.css, script.js, dan folder assets.
Buka Settings → Pages pada repository.
Pada Build and deployment, pilih Deploy from a branch.
Pilih branch main dan folder / (root), lalu tekan Save.
Tunggu proses deployment selesai. GitHub akan menampilkan URL website di bagian Pages.
Jika memakai domain khusus, atur domain melalui pengaturan Pages dan DNS penyedia domain.
Bagian yang dapat diedit
Nomor WhatsApp: ubah WHATSAPP_NUMBER pada script.js dan tautan https://wa.me/6285780294292 di index.html.
Nama, tagline, dan informasi bisnis: cari teks ADMIGI SOLUTION, Your Administration & Digital Partner., serta nomor/jam layanan di index.html.
Warna: ubah variabel CSS di bagian :root dalam style.css, khususnya --purple, --yellow, --light, dan --ink.
Logo: logo saat ini adalah logo tipografi berbasis HTML/CSS (huruf “A.”). Anda dapat mengganti elemen .brand di index.html dengan <img src="assets/logo.svg" alt="Admigi Solution">, lalu tambahkan aturan ukuran gambar di style.css.
Portofolio: ubah kartu .portfolio-card di index.html. Pertahankan atribut data-category, data-title, dan data-description agar filter serta dialog tetap bekerja. Kategori yang tersedia: dokumen, excel, invoice, desain, video, website.
Gambar portofolio: visual contoh sekarang dibuat dengan CSS, bukan proyek pelanggan asli. Untuk menggunakan gambar, masukkan <img src="assets/nama-file.webp" alt="Deskripsi gambar"> ke dalam .portfolio-art dan atur object-fit: cover pada CSS.
Layanan dan FAQ: edit konten langsung pada bagian dengan ID layanan dan faq di index.html.
Catatan
Portofolio ditandai sebagai Contoh Karya agar tidak disalahartikan sebagai proyek pelanggan sungguhan.
Formulir tidak menyimpan data. Setelah validasi browser, formulir menyusun pesan dan membuka WhatsApp.
Layanan administrasi pajak dijelaskan sebagai bantuan administratif dan bukan klaim konsultan pajak bersertifikat.
Google Fonts memerlukan koneksi internet; bila offline, browser memakai font sistem sebagai fallback.
Sebelum dipublikasikan, uji semua tautan, nomor WhatsApp, konten, dan tampilan di ponsel Anda.