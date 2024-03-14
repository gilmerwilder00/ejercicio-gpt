document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.querySelector(".carousel");
    var nextBtn = document.querySelector(".btn-next");
    var prevBtn = document.querySelector(".btn-prev");

    nextBtn.addEventListener("click", function() {
        carousel.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", function() {
        carousel.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });
});
