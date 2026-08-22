/* ==========================================
   FORKA - Website Oficial
   script.js
========================================== */


/* ===========================
   FADE-IN DA PÁGINA
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity .7s";

/* ===========================
   EFEITO DOS CARDS
=========================== */

document.querySelectorAll(".card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ===========================
   HEADER AO ROLAR A PÁGINA
=========================== */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(1,32,60,.95)";

        } else {

            header.style.background = "rgba(1,32,60,.75)";

        }

    });

}

/* ===========================
   CAIXA DE OPÇOES DO EMAIL
=========================== */

function abrirEmail(event) {
    event.preventDefault();

    const modal = document.getElementById("emailModal");

    modal.classList.add("ativo");
}


function fecharEmail() {
    const modal = document.getElementById("emailModal");

    modal.classList.remove("ativo");
}


function copiarEmail() {

    const email = "forka.adm@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {

            const mensagem = document.getElementById("emailCopiado");

            mensagem.textContent = "E-mail copiado!";

            setTimeout(() => {
                mensagem.textContent = "";
            }, 2500);

        })
        .catch(() => {

            alert("Não foi possível copiar automaticamente. E-mail: " + email);

        });
}


/* Fecha ao clicar fora da caixa */

document.getElementById("emailModal").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharEmail();
    }

});

console.log("FORKA Website carregado com sucesso.");