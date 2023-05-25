// disini merupakan fungsi utama dari validasi form yang dimana menerima sebuah data dari argument yang sudah di panggil di awal tadi (lewat file script.js)
function initializeFormValidation(config) {
 // karna form nya ada dua saya deklarasikan forms ini kemudian dapatkan form itu menggunakan queryselectorall, yang artinya form dengan config.formSelector dapat ditemukan
 const forms = document.querySelectorAll(config.formSelector);

 // kemudian saya melakukan looping pada setiap form
 forms.forEach(function (form) {
  // untuk setiap form yang ada di dalamnya
  // saya deklarasikan input yang ada di dalamnya dengan config.inputSelector yang di mana setiap input dari setiap form akan terpilih
  const input = form.querySelector(config.inputSelector);
  // begitu pula dengan submit button
  const submitButton = form.querySelector(config.submitButtonSelector);

  // disini form mempunyai sebuah event submit
  form.addEventListener('submit', function (event) {
   // yang di mana ketika di submit akan menghilangkan aksi defaultnya form
   event.preventDefault();

   // kemudian deklarasikan juga sebuah error message untuk menampilkan sebuah kesalan jika user salah menginput yang di mana di dapat kan sebuah kondisi jika panjang lebih dari 0 maka  harus berupa angka, dan jika panjang kurang dari 0 maka input tidak boleh kosong dan harus berupa angka
   const errorMessage = input.value.length > 0 ? 'Input harus berupa angka' : 'Input tidak boleh kosong & harus berupa angka';

   // jika inputNumber tidak merupakan angka maka akan menampilkan errorMessage dan button akan tidak aktif
   if (isNaN(input.value) || input.value.length == 0) {
    // memanggil fungsi showError
    showError(form, errorMessage);
    // memanggil fungsi deactivateButton
    deactivateButton(submitButton);
   } else {
    // jika inputNumber merupakan angka maka akan menyembunyikan errorMessage dan button akan aktif
    // memanggil fungsi hideError
    hideError(form);
    // memanggil fungsi activateButton
    activateButton(submitButton);
   }
  });

  // disini input memilik sebuah event bernama input
  //  dan untuk isinya tidak jauh beda dengan form yang mempunyai event submit
  input.addEventListener('input', function () {
   const errorMessage = input.value.length > 0 ? 'Input harus berupa angka' : 'Input tidak boleh kosong & harus berupa angka';

   if (isNaN(input.value) || input.value.length == 0) {
    showError(form, errorMessage);
    deactivateButton(submitButton);
   } else {
    hideError(form);
    activateButton(submitButton);
   }
  });
 });

 // disini sebuah fungsi error yang akan menampilkan errorMessage yang dimana mendeklarasikan errorElement yang di daat dari config.element kemudian kita kasih sebuah content dengan menggunakan text content yang isinya adalah errorMessage, yang dimana error message itu di kirim saat kita memanggil fungsi show error, dan terakhir deklarasi input yang di mana adalah untuk membuat border menjadi merah ketika error keluar, yang di dapat dari config.inputTypeErrorClass
 function showError(form, errorMessage) {
  const errorElement = form.querySelector(config.errorElement);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorElementActiveClass);
  const input = form.querySelector(config.inputSelector);
  input.classList.add(config.inputTypeErrorClass);
 }

 // disini sebuah fungsi yang akan menghilangkan error ketika user memasukan input dengan benar, yang dimana error element yang mempunyai class errorElementActiveClass akan di hapus serta input yang mempunyai class inputTypeErrorClass akan di hapus
 function hideError(form) {
  const errorElement = form.querySelector(config.errorElement);
  errorElement.classList.remove(config.errorElementActiveClass);
  const input = form.querySelector(config.inputSelector);
  input.classList.remove(config.inputTypeErrorClass);
 }

 // disini sebuah fungsi yang akan mengaktifkan button submit yang dimana akan menghapus sebuah class yang namanya inactiveButtonClass
 function activateButton(button) {
  button.classList.remove(config.inactiveButtonClass);
 }

 // disini sebuah fungsi yang akan mengnonaktifkan button submit yang dimana akan menambah sebuah class yang namanya inactiveButtonClass
 function deactivateButton(button) {
  button.classList.add(config.inactiveButtonClass);
 }
}

// kemudian kirim fungsi ini agar bisa di pakai di file lain
export default initializeFormValidation;
