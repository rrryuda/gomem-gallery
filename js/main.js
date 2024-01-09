/* Animation */
window.onload = function () {
    var mainElement = document.querySelector("main");
    var pictureElements = mainElement.querySelectorAll("picture");

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry, index) {
            if (entry.isIntersecting) {
                if (window.innerWidth > 767) {
                    setTimeout(function () {
                        animatePicture(entry.target);
                    }, index * 75);
                } else {
                    animatePicture(entry.target);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5, passive: true });

    pictureElements.forEach(function (picture) {
        observer.observe(picture);
    });

    mainElement.style.visibility = 'visible';

    function animatePicture(picture) {
        picture.style.opacity = 1;
        picture.classList.add("-m");
    }

    window.addEventListener("scroll", function () {
        pictureElements.forEach(function (picture) {
            observer.observe(picture);
        });
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
    window.scrollTo(0, 0);
});

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});