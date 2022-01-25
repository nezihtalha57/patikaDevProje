
var namez = ""
var alphaExp = /^[a-zA-Z]+$/
while (true) {
    namez = prompt("isminiz ?")
    if (namez.length > 2) {
        if (namez.match(alphaExp)) {
            alert("you are in bro")
            break
        }
    } else {
        alert("rakam veya karakter içermemeli ve 2 harften fazla olmalı")
    }
}

var isim = document.querySelector("#myName")

isim.innerHTML = namez

var myClock = document.querySelector("#myClock")

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

const weekday = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock2").innerHTML = h + ":" + m + ":" + s + " " + weekday[d];
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();
