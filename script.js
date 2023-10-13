
let imgBox = document.getElementById('imgBox');
let qrText = document.getElementById('qrText');
let qrImage = document.getElementById('qrImage');

// $("#qrText").keypress(function (event) {
//     if (event.keyCode === 13) {
//         $("#gbtn").click();
//     }
// });
function qrCodeGenerator() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    
} 

qrText.addEventListener('keyup', (e) => {
    if(e.keycode === 13) {
        qrCodeGenerator();

    }
});

