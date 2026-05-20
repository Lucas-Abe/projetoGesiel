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