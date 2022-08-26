// var a = Number(prompt ('Birinchi sonni kiriting....'));
// var b = Number(prompt ('Ikkinchi sonni kiriting....'));

// console.log(a + b);

// shunaqa boganda qoldiqsiz son chiqarib beradi

// console.log(Math.ceil(Math.random() * 1000)) 



// var userName = prompt('Ismingizni kiriting');
// var age = prompt('Yoshingizni kiriting');

// if (age >= 18) {
//    console.log('Assalomu alaykum' + ' ' + userName + ' ' + 'saytimizga xush kelibsiz');
// } else{
//    console.log('Assalomu alaykum' +' '+ userName +' ' + 'ming afsus xayir');
// }
// var elNumber = document.querySelector('.number')
// var elStatus = document.querySelector('.status');
// var number = +prompt('Soni kiriting!!!!!')
// elNumber.textContent = number

// if (number % 2 == 0) {
//    elStatus.textContent = 'Juft';
// }else {
//    elStatus.textContent = 'Toq'
// }






// var elBoy = document.querySelector('.boy');
// var elUser = document.querySelector('.user')

// var boy = prompt('Ismingizni kiriting !!!!!');



// var user = prompt('Jinsingizni kiriting !!!!!');

// elBoy.textContent = boy

// if (user == 'mail'){
//    elUser.textContent = 'Erkak';
// }else {
//    elUser.textContent = 'Ayol'
// }

var elTitle = document.querySelector('.title')
var balance = +prompt('Alisherjon sayohat uchun qancha pulingiz bor ? So`mda kiriting')

if (balance > 9666000) {
   elTitle.textContent = `Oq yol Hurmatli Alisherjon !!!!`;
}
else{elTitle.textContent = `Hurmatli Alisherjon Mablag\'ingiz yetarli emas !!!!`}