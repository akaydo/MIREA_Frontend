/* функция извлекает текущее время на компьютере и отображает в браузере */
function showTime() {
    var d = new Date(); /* объект типа дата */
    document.getElementById("clock").innerHTML = d.toLocaleTimeString(); /* текстовое представление времени */
}
/* функция выполняется повторно через каждые 1000 мс */
setInterval(showTime, 1000);