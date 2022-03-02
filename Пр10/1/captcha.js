const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

// хранение всех символов капчи в массиве
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function getCaptcha(){
  for (let i = 0; i < 6; i++) { // получаем 6 случайных символов из массива
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; // передача 6 случайных символов внутри captcha innerText
  }
}

getCaptcha(); // вызываем функцию getCaptcha когда открывается страница браузера
// вызов функции getCaptcha и removeContent при нажатии кнопки перезагрузки
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); // предотвращение использования кнопки по умолчанию
  statusTxt.style.display = "block";
  // добавление пробела после каждого символа введенных пользователем значений (потому что добавлены пробелы при генерации капчи)
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ // если капча введена верно
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Круто! Похоже, вы не робот";
    setTimeout(()=>{ // вызываем функции removeContent и getCaptcha через 2 секунды
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Неверная капча! Попробуйте еще раз.";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}