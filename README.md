# Profil Mahasiswa 💻

---

**Nama**  
👤 Fadhli Akbar Sahendra

**NIM**  
🆔 23343036

**Program Studi**  
🎓 Informatika

**Sesi**  
🗓️ 202513430093 : INF1.62.5010 

---  

> Disusun sebagai bagian dari praktikum pemrograman jariangan pada program studi Informatika.

---

## Jobsheet 1 – Pengantar Node.js
Jobsheet ini berfungsi sebagai pintu masuk menuju pemrograman berbasis jaringan dengan Node.js. Dimulai dari penjelasan konseptual tentang arsitektur klien-server yang menjadi tulang punggung komunikasi jaringan modern, mahasiswa diajak memahami bagaimana protokol seperti HTTP bekerja, peran socket dalam pertukaran data, serta perbedaan mendasar antara pemrograman sinkron dan asinkron. Node.js diperkenalkan bukan sekadar sebagai runtime JavaScript, tetapi sebagai platform revolusioner yang mengadopsi model event-driven dan non-blocking I/O, memungkinkan pembuatan aplikasi jaringan yang sangat efisien dan skalabel. Melalui instalasi Visual Studio Code dan Node.js, mahasiswa tidak hanya mempersiapkan lingkungan development, tetapi juga mengalami langsung ekosistem Node.js. Pembuatan program *Hello World* menggunakan modul HTTP bawaan menjadi pengalaman pertama dalam melihat bagaimana server web sederhana dibangun, sekaligus memperkenalkan pola dasar request-response yang akan terus digunakan dalam pengembangan aplikasi jaringan.

---

## Jobsheet 2 – Node.js Module System
Jobsheet ini mendalami arsitektur modular Node.js yang menjadi salah satu kekuatan utamanya. Sistem modul CommonJS dijelaskan secara komprehensif, mulai dari cara mengimpor modul inti seperti `fs` untuk operasi file hingga membuat modul kustom dengan `module.exports`. Mahasiswa diajak memahami filosofi *satu file, satu modul* yang mendorong kode yang terorganisir dan reusable. Pengenalan NPM (Node Package Manager) membuka wawasan tentang ekosistem package yang luas, di mana ribuan library siap digunakan. Praktik instalasi package seperti `validator` dan `chalk` menunjukkan bagaimana dependensi dikelola melalui `package.json`. Bagian command line arguments memperkenalkan `process.argv` sebagai pintu masuk untuk interaksi pengguna melalui terminal, sementara `yargs` menawarkan solusi parsing yang lebih sophisticated. Aplikasi buku catatan yang dikembangkan tidak hanya menerapkan CRUD dasar, tetapi juga memperkenalkan konsep persistensi data dengan JSON, memberikan pengalaman nyata dalam menangani data terstruktur di Node.js.

---

## Jobsheet 3 – HTTP Request dan API
Jobsheet ini membawa mahasiswa ke dunia komunikasi web modern melalui eksplorasi mendalam tentang HTTP request dan API. Proses HTTP diurai menjadi tujuh langkah terstruktur—dari inisiasi request oleh klien hingga penutupan koneksi—memberikan pemahaman menyeluruh tentang protokol yang menjadi fondasi web. Konsep API dijelaskan sebagai kontrak antara sistem yang berbeda, dengan penekanan pada model request-response, endpoint, autentikasi, dan dokumentasi. Praktik langsung dengan Weatherstack API menunjukkan bagaimana data cuaca real-time diakses, sementara Mapbox API memperkenalkan geocoding dan reverse geocoding. Integrasi kedua API ini mengajarkan mahasiswa tentang error handling, parameter query, dan format data JSON. Jobsheet ini tidak hanya mengajarkan cara mengonsumsi API, tetapi juga membangun pola pikir dalam mendesain sistem yang terintegrasi dengan layanan eksternal.

---

## Jobsheet 4 – JavaScript Essentials
Jobsheet ini menegaskan posisi JavaScript sebagai bahasa pemrograman yang tidak terpisahkan dari pengembangan aplikasi jaringan modern. Sejarah JavaScript dari LiveScript hingga standar ECMAScript dijelaskan untuk memberikan konteks evolusi bahasa ini. Peran JavaScript dalam membuat aplikasi web interaktif dibahas dengan menekankan kemampuan AJAX untuk komunikasi asinkron dan DOM manipulation untuk antarmuka dinamis. Akses ke Cisco Networking Academy membuka kurikulum terstruktur JavaScript Essentials 1, di mana mahasiswa tidak hanya belajar sintaks dasar, tetapi juga memahami konsep seperti scope, closure, dan event handling yang krusial untuk pemrograman jaringan. Jobsheet ini berfungsi sebagai jembatan antara kemampuan JavaScript dasar dan penerapannya dalam konteks server-side dengan Node.js.

---

## Jobsheet 5 – Web Server dan Express.js
Jobsheet ini merupakan eksplorasi komprehensif tentang pembangunan web server menggunakan Express.js. Dimulai dengan pembedaan web server statis dan dinamis, mahasiswa diajak memahami bagaimana Express.js berperan sebagai framework *unopinionated* yang fleksibel di atas Node.js. Perbandingan mendetail antara Node.js dan Express.js mengklarifikasi peran masing-masing dalam stack teknologi. Pembuatan routing dengan `app.get()` memperkenalkan pola MVC secara implisit, sementara integrasi HTML, CSS, dan JavaScript menunjukkan bagaimana aplikasi web lengkap dibangun. Penggunaan Handlebars sebagai template engine menjadi titik penting dalam memisahkan logic dari presentation, dengan partials dan layout system yang meningkatkan maintainability kode. Aplikasi cuaca yang dikembangkan menjadi studi kasus nyata dalam membangun aplikasi web dengan struktur profesional.

---

## Jobsheet 6 – JSON HTTP Endpoints
Jobsheet ini fokus pada pembangunan API RESTful menggunakan Express.js dengan JSON sebagai format pertukaran data. Konsep endpoint dijelaskan sebagai titik akses terdefinisi dalam arsitektur API, termasuk penggunaan `req.query` untuk menangani parameter URL. Integrasi lanjutan dengan Weatherstack dan Mapbox API menunjukkan bagaimana layanan mikro dapat diorkestrasi dalam satu aplikasi. Penggunaan Fetch API di sisi client menghubungkan frontend dan backend secara dinamis, menciptakan aplikasi cuaca dengan pencarian lokasi real-time, validasi input, dan error handling yang robust. Jobsheet ini menanamkan prinsip desain API seperti statelessness dan keterbacaan endpoint.

---

## Jobsheet 7 – Version Control dan App Deployment
Jobsheet ini membawa mahasiswa dari tahap development lokal ke deployment produksi. Konsep version control dijelaskan sebagai fondasi kolaborasi perangkat lunak modern dengan Git sebagai implementasi distributed version control system. Mahasiswa mempraktikkan seluruh alur kerja Git mulai dari inisialisasi repository, commit, branching, hingga push ke GitHub. Penggunaan `.gitignore` untuk mengecualikan `node_modules` memperkenalkan best practice manajemen proyek. Deployment ke platform cloud mencakup pengaturan environment variables, port server, serta autentikasi berbasis SSH key. Jobsheet ini membekali mahasiswa dengan kemampuan dasar DevOps untuk mendistribusikan aplikasi ke lingkungan produksi.

---

## Jobsheet 8 – MongoDB dan Database Server
Jobsheet ini mengeksplorasi paradigma database NoSQL menggunakan MongoDB sebagai alternatif database relasional. Perbandingan SQL dan NoSQL mencakup skema data, skalabilitas, dan use case masing-masing. Konsep document-oriented database dijelaskan melalui struktur JSON/BSON. Mahasiswa melakukan operasi CRUD menggunakan MongoDB Node.js Driver dan mempelajari ObjectId sebagai primary key unik. Aplikasi task manager menjadi studi kasus penerapan data modeling NoSQL, termasuk embedded documents dan references. Jobsheet ini membekali mahasiswa dengan pemahaman pemilihan database yang tepat sesuai kebutuhan aplikasi.

---

## Jobsheet 9 – Socket Programming
Jobsheet ini membahas komunikasi real-time menggunakan WebSocket dan Socket.IO. Perbedaan mendasar antara HTTP dan WebSocket dijelaskan sebagai perbandingan komunikasi request-response dengan koneksi dua arah berkelanjutan. Mahasiswa membangun aplikasi chat real-time dengan fitur room, broadcast messaging, acknowledgment, dan auto-reconnection. Integrasi dengan browser API serta penggunaan library pendukung menunjukkan bagaimana aplikasi real-time modern dikembangkan. Jobsheet ini memperkenalkan pola event-driven architecture yang digunakan dalam aplikasi kolaboratif, dashboard live, dan multiplayer systems.

---

📌 *Dokumen ini dibuat sebagai dokumentasi materi perkuliahan Praktikum Pemrograman Jaringan.*
