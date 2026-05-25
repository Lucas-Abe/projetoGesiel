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

const toggleButton = document.querySelector(".toggle-mode");
const toggleButtonIcon = document.querySelector(".toggle-mode i");
const toggleButtonText = document.querySelector("#toggle-container span");
const body = document.querySelector("body");

const navbars = document.querySelectorAll(".navbar-link");

const servicoItems = document.querySelectorAll(".servico");

const contatos = document.querySelectorAll(".contato-item");
const contatoWhatsApp = document.getElementById("contato-whatsapp");

toggleButton.addEventListener("click", () => {

    if (toggleButtonIcon.classList.contains("fa-toggle-off")) {
        toggleButtonIcon.classList.remove("fa-toggle-off");
        toggleButtonIcon.classList.add("fa-toggle-on");
        toggleButtonText.textContent = "Light Mode";
        body.classList.add("white-mode");
        toggleButton.classList.add("black-button");
        navbars.forEach(
            (navbar) => {
                navbar.classList.add("black-container");
            }
        )
        servicoItems.forEach(
            (servico) => {
                servico.classList.remove("servico");
                servico.classList.add("servico2");
            }
        )
        contatos.forEach(
            (contato) => {
                contato.classList.add("contato-item2");
            }
        )
        contatoWhatsApp.removeAttribute("id", "contato-whatsapp");
        contatoWhatsApp.setAttribute("id", "contato-whatsapp2");
        hamburgerButton.style.border = "1px solid black";
    }
    else {
        toggleButtonIcon.classList.remove("fa-toggle-on");
        toggleButtonIcon.classList.add("fa-toggle-off");
        toggleButtonText.textContent = "Dark Mode";
        body.classList.remove("white-mode");
        toggleButton.classList.remove("black-button");
        navbars.forEach(
            (navbar) => {
                navbar.classList.remove("black-container");
            }
        )
        servicoItems.forEach(
            (servico) => {
                servico.classList.add("servico");
                servico.classList.remove("servico2");
            }
        )
        contatos.forEach(
            (contato) => {
                contato.classList.remove("contato-item2");
            }
        )
        contatoWhatsApp.removeAttribute("id", "contato-whatsapp2");
        contatoWhatsApp.setAttribute("id", "contato-whatsapp");
        hamburgerButton.style.border = "1px solid white";
    }

})