// pertama disini saya menggunakan system modul javascript
// alasan saya menggunakan itu agar code lebih rapih dan mudah untuk di baca

// disini kumpulan import dari setiap file js yang di perlukan untuk menjalankan fungsinya di file utama yaitu script.js
import initializeFormValidation from './validasi.js';
import SquareFormula from './SquareFormula.js';
import { hitungKeliling, hitungLuas, sisiKeliling, sisiLuas } from './constanta.js';

// fungsi ini di gunakan untuk memvalidasi semua form yang ada di website Katik, dan menjalankan fungsi initializeFormValidation dengan mengirim parameter berupa objek seperti berikut, untuk pejelasan fungsinya seperti apa mari beralih ke file validasi.js
initializeFormValidation({
 formSelector: '.form',
 inputSelector: '.form-input',
 submitButtonSelector: '.button-hitung',
 inactiveButtonClass: 'button-inactive',
 errorElement: '.form-input-error',
 errorElementActiveClass: 'form-input-error-active',
 inputTypeErrorClass: 'form-input-type-error',
});

// kedua event listener tersebut merupakan sebuah event yang dimana akan berjalan ketika user meng click tombol hitung pada website Katik, dan menjalankan fungsi SquareFormula dengan mengirim argumen l/k untuk penjelasannya seperti apa mari beralih ke file SquareFormula.js
hitungKeliling.addEventListener('click', function () {
 SquareFormula('k');
});

hitungLuas.addEventListener('click', function () {
 SquareFormula('l');
});
