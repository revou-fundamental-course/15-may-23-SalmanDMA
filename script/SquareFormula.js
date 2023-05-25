// disini kita membutuhkan variable berikut untuk menjalakan fungsi square formula dengan meng import lewat file constanta.js
import { sisiKeliling, sisiLuas, outputLuas, outputKeliling } from './constanta.js';

// l means Luas
// k means Keliling
const formulas = {
 l: {
  text: 'L = S x S',
  calculation: (value) => value * value,
  outputElement: outputLuas,
 },
 k: {
  text: 'K = 4 x S',
  calculation: (value) => value * 4,
  outputElement: outputKeliling,
 },
};

// ini merupakan rumus utama dari hitung luas dan keliling
function SquareFormula(type) {
 // pertama kita deklarasi input element yang di dapat dari sebuah kondisi, yang dimana jika tipe nya l maka input element yang di dapat adalah sisi luas dan jika tipe nya k maka input element yang di dapat adalah sisi keliling
 const inputElement = type === 'l' ? sisiLuas : sisiKeliling;
 // kedua kita deklarasi input value untuk mendapatkan valuenya input element
 const inputValue = parseFloat(inputElement.value);
 // ketiga, disini saya menggunakan destructuring untuk mengambil data dari objek formulas, yang berupa text, calculation, dan outputElement berdasarkan typenya yang di awal kirim sebagai argument itu
 const { text, calculation, outputElement } = formulas[type];

 // disini saya menggunakan if statement untuk mengecek apakah inputValue bernilai NaN atau tidak, dan jika ya maka return kosong yang berarti tidak ada nilai yang di kembalikan
 if (isNaN(inputValue)) {
  return;
 }

 // disini saya membuat sebuah element yang berisi text, calculation, dan outputElement berdasarkan data yang di dapat dari objek formulas
 const resultText = document.createElement('p');
 resultText.classList.add('result-text');
 resultText.textContent = text;

 const resultValue = document.createElement('p');
 resultValue.classList.add('result-value');
 resultValue.textContent = `${type.toUpperCase()} = ${type === 'l' ? inputValue : '4'} x ${inputValue}`;

 const resultAll = document.createElement('p');
 resultAll.classList.add('result-all');
 resultAll.textContent = `${type.toUpperCase()} = ${calculation(inputValue)}`;

 const resultContainer = document.createElement('div');
 resultContainer.append(resultText, resultValue, resultAll);

 if (outputElement.childNodes.length > 0) {
  outputElement.replaceChild(resultContainer, outputElement.childNodes[0]);
 } else {
  outputElement.append(resultContainer);
  outputElement.classList.add('result-active');
 }
}
// kemudian di gabungkan ke output element

// kemudian saya kirim untuk dapat digunakan oleh file lain
export default SquareFormula;
