/*const containerPfp = document.getElementById("container-pfp");
const containerApresentacao = document.getElementById("container-apresentacao");

const animacaoPfp = containerPfp.animate(
    [{ opacity: 0, transform: "translateX(50px)" }, { opacity: 1, transform: "translateX(0px)" }],
    {
        duration: 500,
        easing: "ease-in-out"
    }
);

containerApresentacao.animate(
    [{ opacity: 0, transform: "translateX(20px)" }, { opacity: 1, transform: "translateX(0px)" }],
    {
        duration: 500,
        easing: "ease-in-out"
    }
);
*/
const hamburgerButton = document.getElementById("hamburger-button");
const navbarContainer = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", () => {

    navbarContainer.classList.toggle("hidden");

})

const toggleButton = document.querySelector("#toggle-mode");
const toggleButtonIcon = document.querySelector("#toggle-mode i");
const toggleButtonText = document.querySelector("#toggle-container span");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {

    if (toggleButtonIcon.classList.contains("fa-toggle-off")) {
        toggleButtonIcon.classList.remove("fa-toggle-off");
        toggleButtonIcon.classList.add("fa-toggle-on");
        toggleButtonText.textContent = "Light Mode";
        body.classList.add("white-mode");
    }
    else {
        toggleButtonIcon.classList.remove("fa-toggle-on");
        toggleButtonIcon.classList.add("fa-toggle-off");
        toggleButtonText.textContent = "Dark Mode";
        body.classList.remove("white-mode");
    }

})