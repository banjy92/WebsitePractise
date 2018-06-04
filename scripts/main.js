function changeimage() {
    var curImg = document.getElementById("mainimg");
    var curSrc = curImg.getAttribute('src');
    if(curSrc === "images/megumin.jpg") {
        curImg.setAttribute('src', 'images/explosion2.jpg');
    } else {
        curImg.setAttribute('src','images/megumin.jpg');
    }
}