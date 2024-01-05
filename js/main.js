window.onload = function () {
    var pictureElements = document.querySelectorAll("main picture");

    pictureElements.forEach(function (picture, index) {
        setTimeout(function () {
            picture.style.opacity = 1;
            picture.classList.add("-m");
        }, (index + 2) * 150);
    });
};