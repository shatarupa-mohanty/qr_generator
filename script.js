let userip = document.querySelector(".userTU");
let qrdiv = document.querySelector(".qrbox");
let qrimg = document.getElementById("qrImg");
function generateQR() {
    if (userip.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userip.value;
        setInterval(() => {
            qrdiv.classList.add("show");
        }, 1000);
        // console.log(userip.value);
    }
    else {
        alert("enter text or url");
    }
}