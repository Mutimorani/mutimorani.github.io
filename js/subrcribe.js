function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

var Digital = new Date();
var hours = Digital.getHours();
var hello_time = "";Ы
if (hours >= 5 && hours <= 11) hello_time = "Доброе утро";
else if (hours == 12) hello_time = "Добрый день!";
else if (hours >= 12 && hours <= 17)
  hello_time = "Добрый день, уже вторая половина дня";
else if (hours >= 17 && hours <= 23) hello_time = "Добрый вечер";
else if (hours >= 23 && hours <= 5) hello_time = "Доброй ночи";

document.getElementById("hello-time").innerHTML = hello_time;
