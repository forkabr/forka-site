/* ==========================================
   FORKA - Website Oficial
   script.js
========================================== */

/*
==========================================================
                CONFIGURAÇÃO DOS LINKS
==========================================================

Substitua os "#" pelos links reais quando tiver
as lojas publicadas.
*/

const links = {

    mercadoLivre: "#",

    shopee: "#",

    tiktok: "#",

    whatsapp: "#"

};

/*
==========================================================
            ATRIBUIÇÃO DOS LINKS AOS BOTÕES
==========================================================
*/

document.getElementById("mercadolivre").href = links.mercadoLivre;

document.getElementById("shopee").href = links.shopee;

document.getElementById("tiktok").href = links.tiktok;

document.getElementById("whatsapp").href = links.whatsapp;


/*
==========================================================
                ABRIR EM NOVA ABA
==========================================================
*/

document.querySelectorAll(".btn").forEach(botao => {

    botao.setAttribute("target","_blank");

});


/*
==========================================================
            ANIMAÇÃO DE ENTRADA DA PÁGINA
==========================================================
*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .7s";


/*
==========================================================
            EFEITO NOS CARDS
==========================================================
*/

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*
==========================================================
            MENSAGEM NO CONSOLE
==========================================================
*/

console.log("FORKA Website carregado com sucesso.");