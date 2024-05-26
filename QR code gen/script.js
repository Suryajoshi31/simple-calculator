
function generateQR() {
    const text = document.getElementById('qrText').value;
    const qrImage = document.getElementById('qrImage');
   

    if (text) {
        QRCode.toDataURL(text, function (err, url) {
            if (err) {
                console.error(err);
                return;
            }
            qrImage.src = url;
        });
    } else {
        alert('Please enter some text or URL');
    }
}
imgBox.classlist.add("show-img")

