//import fs from 'fs';

// fs.writeFileSync('catatan.txt', 'Nama Saya Fadhli Akbar Sahendra')
// fs.appendFileSync('catatan.txt', ' Saya Tinggal di Padang')

// const catatan = require('./catatan.js');
// const pesan = catatan();
// console.log(pesan);

// const validator = require('validator')
// const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://akbar.com'))

// const chalk = require('chalk');
// console.log(chalk.red('Lionel Messi'));

// const ambilCatatan = require('./catatan.js')
// const command = process.argv[2]
// console.log(process.argv)
// console.log(process.argv[2])

// if (command === 'tambah') {
//     console.log('Tambah Catatan')
// } else if (command === 'hapus') {
//   console.log('Hapus Catatan')
// }

const yargs = require('yargs')
const catatan = require('./catatan.js')

// Kustomisasi versi yargs
yargs.version('10.1.0')

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true, // wajib diisi
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true, // wajib diisi
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
})

// Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang akan dihapus',
            demandOption: true, // wajib diisi
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul);
    }
})

// Perintah List
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler: function () {
        catatan.listCatatan();  // ✅ Panggil fungsi yang sudah dibuat
    }
})

// Perintah Read
yargs.command({
    command: 'read',
    describe: 'Membaca sebuah catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul);  // ✅ Panggil fungsi yang sudah dibuat
    }
})

// Instruksi no.4 letakan disini
// Perintah list (tampilkan semua catatan)
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler: function (argv) {
        const semuaCatatan = catatan.listCatatan(); // pastikan fungsi ini ada di catatan.js
        console.log('Daftar Catatan:');
        semuaCatatan.forEach((c, i) => {
            console.log(`${i + 1}. ${c.judul}`);
        });
    }
});

// Perintah read (baca catatan berdasarkan judul)
yargs.command({
    command: 'read',
    describe: 'Membaca sebuah catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true, // wajib diisi
            type: 'string'
        }
    },
    handler: function (argv) {
        const cat = catatan.bacaCatatan(argv.judul); // pastikan fungsi ini ada di catatan.js
        if (cat) {
            console.log('Isi Catatan:');
            console.log(`Judul: ${cat.judul}`);
            console.log(`Isi: ${cat.isi}`);
        } else {
            console.log(`Catatan dengan judul "${argv.judul}" tidak ditemukan`);
        }
    }
});

// letakan bagian ini pada baris terakhir
yargs.parse()