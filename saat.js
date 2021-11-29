var isim = prompt("Adınızı giriniz ");
if(isim.length>3){
document.getElementById("myName").innerText = isim;}
else{
    alert("düzgün ad gir lan")
}
var text = document.querySelector("#caktirma")
text.innerHTML = `çaktırma ${isim} geleceğini biliyordum.`

function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();

    if (day == 1) {
        day = "Pazartesi";
    } else if (day == 2) {
        day = "Salı";
    } else if (day == 3) {
        day = "Çarşamba";
    } else if (day == 4) {
        day = "Perşembe";
    } else if (day == 5) {
        day = "Cuma";
    } else if (day == 6) {
        day = "Cumartesi";
    } else if (day == 0)  // 7 değil 0 olmalı?  
    {
        day = "Pazar";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    var theTime = `${hour}:${min}:${sec} ${day}`

    document.getElementById("myClock").innerHTML = theTime;
    // document.getElementById("myClock").innerText = theTime;
    // document.getElementById("myClock").textContent = theTime;

    setTimeout(showTime, 1000);
}

showTime();