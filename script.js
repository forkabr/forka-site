/* ==========================================
   FORKA - Website Oficial
   script.js
========================================== */

/* ===========================
   LINKS DAS PLATAFORMAS
=========================== */

const links = {
    mercadoLivre: "#",
    shopee: "#",
    tiktok: "#",
    whatsapp: "#"
};

/* ===========================
   ATRIBUIR LINKS AOS BOTÕES
=========================== */

const btnML = document.getElementById("mercadolivre");
const btnShopee = document.getElementById("shopee");
const btnTikTok = document.getElementById("tiktok");
const btnWhatsApp = document.getElementById("whatsapp");

if (btnML) btnML.href = links.mercadoLivre;
if (btnShopee) btnShopee.href = links.shopee;
if (btnTikTok) btnTikTok.href = links.tiktok;
if (btnWhatsApp) btnWhatsApp.href = links.whatsapp;

/* ===========================
   ABRIR LINKS EM NOVA ABA
=========================== */

document.querySelectorAll(".btn").forEach((botao) => {
    botao.target = "_blank";
});

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

console.log("FORKA Website carregado com sucesso.");