/* Animation */
window.onload = function () {
    var pictureElements = document.querySelectorAll("main picture");

    pictureElements.forEach(function (picture, index) {
        setTimeout(function () {
            picture.style.opacity = 1;
            picture.classList.add("-m");
        }, (index + 3) * 75);
    });
};

/* Bio */
function showPopup(event) {
    var popup = document.getElementById("bio");
    popup.style.display = "block";
    updatePopupPosition(event);
    window.addEventListener("mousemove", updatePopupPosition);
    window.addEventListener("scroll", hidePopup);
}

function hidePopup() {
    var popup = document.getElementById("bio");
    popup.style.display = "none";
}

function updatePopupPosition(event) {
    var popup = document.getElementById("bio");
    var x = event.clientX + 10;
    var y = event.clientY + 10;
    popup.style.left = x + "px";
    popup.style.top = y + "px";
}

window.addEventListener("load", function () {
    hidePopup();
});