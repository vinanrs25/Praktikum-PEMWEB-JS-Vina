// Nama : Vina Nur Nisa
// NIM : 2408200
// RPL 4C - PEMWEB JS


// SOAL A1 - Warna Judul Artikel Tidak Berubah

const judul = document.getElementById('artikel-judul');

judul.style.color = '#3b82f6';
console.log("Warna judul berhasil diubah.");

// tidak berubah karena "artikel-judul" belum ditambahkan di html sebagai id
// menambah id "artikel-judul" di tag h1
// getElementById digunakan untuk mengambil elemen berdasarkan id, sedangkan querySelector mengambil elemen berdasarkan selector CSS (bisa id, class, tag, dll)
// getElementById digunakan ketika kita butuh spesifik ke 1 elemen, misalnya tombol utama
// querySelector digunakan ketika kita ingin fleksibel memilih elemen, karena bisa menggunakan class atau tag, tidak hanya pada id saja, dipakai juga ketika suatu elemen tidak memiliki id


// Soal A2 – Highlight Artikel Tidak Bisa Di-toggle

const artikel = document.querySelector('.main-article');
judul.addEventListener('click', function() {
    artikel.classList.toggle('highlight');
});

// classList.toggle yang dipanggil dua kali berturutan selalu menghasilkan kondisi awal karena toggle yang pertama akan menambahkan dan akan menghapus jika sudah ada, jadi jika dipanggil dua kali berturut-turut hasilnya akan kembali ke awal.
// menghapus const judul karena sudah ada sebelumnya
// menghapus duplikasi toggle
// menandai highlight dengan membuat class .highlight di css


// Soal A3 – Filter Kategori Tidak Berfungsi dengan Benar

const input = document.querySelector('#filter-kategori');
const items = input.nextElementSibling.querySelectorAll('.sidebar-widget li');

// mengambil elemen input dengan id filter-kategori
// menggunakan nextElementSibling untuk ambil elemen setelah input yaitu 'ul'
// diambil semua li yang ada di dalam ul sebagai item kategori
// tujuan menggunakan nextElementSibling agar hanya membawa bagian elemen yang akan dituju selanjutnya, jika tidak menggunakan, elemen yang sama di class sidebar-widget akan ikut terfilter juga

input.addEventListener('input', function() {
    const keyword = input.value.toLowerCase();
    items.forEach(function(item) {
        const teks = item.innerText.toLowerCase();
        if (teks.includes(keyword)) { //kata yang mengandung "keyword inputan user" akan ditampilkan
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// "if =" digunakan untuk memberi nilai ke variabel, sedangkan untuk keyword ini diperlukan perbandingan, sehingga semua item akan selalu tampil ketika difilter

// kode diubah menjadi "(teks.includes(keyword))", agar setiap kata yang mengandung input user akan ditampilkan

// "=" digunakan untuk memberi nilai ke variabel, bukan untuk membandingkan.Sedangkan "===" digunakan untuk digunakan untuk perbandingan 100 % , jadi harus benar benar sama persis jika ingin inputannya ditampilkan dengan menggunakan "===" .
// Bahaya "=" di if karena tidak terlihat error, tapi mengubah variabel yang menimbulkan kesulitan melacak logikanya


// Soal B1 – Highlight Link Navigasi Aktif (Manipulasi DOM)

const navLink = document.querySelectorAll('nav a')

navLink.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLink.forEach(function(item) {
            item.classList.remove('active')
        });
        link.classList.add('active');
    })
})

// mengambil semua elemen tag <a> dengan querySelectorAll, dan perulangan dengan forEach untuk event click di setiap link
// menggunakan e.preventDefault untuk mencegah halaman berpindah ketika fungsinya dijalankan
// forEach pertama digunakan untuk mengambil setiap link yang ada di navbar dan diisimpan di variabel link, lalu diberi event click
// forEach kedua digunakan untuk menghapus class 'active' dari semua link, dan classList.add berfungsi untuk menambahkan class active ke link yang diklik
// sehingga dalam satu waktu hanya ada satu link saja dengan class active


// Soal B2 – Estimasi Waktu Baca Dinamis (Manipulasi DOM)

const paragraph = document.querySelectorAll('.main-article p')
let semuaTeks = '';

paragraph.forEach(function(p) {
    semuaTeks += p.innerText + ' ';
});

const jumlahKata = semuaTeks.split(' ').length;
const estimasiBaca = Math.ceil(jumlahKata / 200);
const meta = document.querySelector('.meta-info');

meta.innerText += ' | Estimasi: ' + estimasiBaca + ' menit baca';

// mengambil semua elemen paragraf <p></p> mengunakan querySelectorAll, lalu menggabungkan semua teks dengan perulangan forEach dan operator +=
// menghitung jumlah kata dengan split (' ') dan mengambil panjangnya dengan length
// menghitung estimasi waktu baca dengan membagi jumlah kata dengan 200 dan dibulatkan dengan Math.ceil()
// menambahkan hasil estimasi ke dalam elemen .meta-info menggunakan innerText += tanpa menghapus teks yang sebelumnya


// Soal B3 – Filter Kategori Sidebar (Algoritma Sederhana)

// soalnya mirip dengan A3, jadi kodenya sudah dibuat di soal A3 secara keseluruhan dengan penjelasannya
