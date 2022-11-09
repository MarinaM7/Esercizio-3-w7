// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("timer").innerHTML = `Timer: ${d.getSeconds()}`;
// }

// es 1

var conteggio = 0;
var mioTimer = setTimeout(function timer() {
    document.getElementById("timer").innerHTML = `Timer: ${++conteggio}`;
    mioTimer = setTimeout(timer, 1000);
    sessionStorage.setItem("Timer", document.getElementById("timer").innerHTML);
}, 1000);

// es 2

var send = document.getElementById('send');
var logout = document.getElementById('logout');

send.addEventListener('click', (e) => {
    e.preventDefault;
    var nome = document.getElementById('name').value;
    localStorage.setItem(
        "name", JSON.stringify(nome)
    );
});

logout.addEventListener('click', (e) => {
    e.preventDefault;
    var nome = document.getElementById('name').value;
    localStorage.removeItem(
        "name", JSON.stringify(nome)
    );
    document.getElementById('name').value = '';
});
