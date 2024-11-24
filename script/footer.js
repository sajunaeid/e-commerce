// back to top button start
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// back to top button end