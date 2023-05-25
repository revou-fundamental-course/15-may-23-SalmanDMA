// ini merupakan sebuah data yang di dapat dari file html yang dimana berdasarkan id sebuah element html, yang berfungsi  untuk memenuhi kebutuhan  yang ada di file lainnya

const hitungKeliling = document.getElementById('hitung-keliling');
const hitungLuas = document.getElementById('hitung-luas');
const sisiKeliling = document.getElementById('sisi-keliling');
const sisiLuas = document.getElementById('sisi-luas');
const outputLuas = document.getElementById('output-luas');
const outputKeliling = document.getElementById('output-keliling');

// kemudian kirim untuk dapat digunakan oleh file lain
export { hitungKeliling, hitungLuas, sisiKeliling, sisiLuas, outputLuas, outputKeliling };
