const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


form.onsubmit = (e)=>{
  e.preventDefault(); 
  // если email и пароль пустые, то добавляем класс shake
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  setTimeout(()=>{ // убираем shake class после 500мс
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
 
  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // форма правильной записи почты
    if(!eInput.value.match(pattern)){ // если форма неверная, вызываем ошибку и удаляем valid класс
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      // если поле с почтой не пустое
      (eInput.value != "") ? errorTxt.innerText = "Введите правильный адрес" : errorTxt.innerText = "Поле не может быть пустым";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
      window.location.href = form.getAttribute("action"); 
  }
}