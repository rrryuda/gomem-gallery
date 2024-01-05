/* Animation */
window.onload = function () {
    var pictureElements = document.querySelectorAll("main picture");

    pictureElements.forEach(function (picture, index) {
        setTimeout(function () {
            picture.style.opacity = 1;
            picture.classList.add("-m");
        }, (index + 2) * 150);
    });
};

/* Bio */
function showPopup(event) {
    var popup = document.getElementById("bio");
    popup.style.display = "block";
    updatePopupPosition(event);
    window.addEventListener("mousemove", updatePopupPosition);
}

function hidePopup() {
    var popup = document.getElementById("bio");
    popup.style.display = "none";
    window.removeEventListener("mousemove", updatePopupPosition);
}

function updatePopupPosition(event) {
    var popup = document.getElementById("bio");
    var x = event.clientX + 10;
    var y = event.clientY + 10;
    popup.style.left = x + "px";
    popup.style.top = y + "px";
}