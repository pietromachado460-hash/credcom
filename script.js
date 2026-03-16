/* =====================================================
MENU MOBILE
Abre e fecha o menu no celular
===================================================== */

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    /* atualiza acessibilidade do botão */
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
}

/* =====================================================
SCROLL SUAVE DO MENU
Faz o site rolar suavemente ao clicar no menu
===================================================== */

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const header = document.querySelector(".site-header");

    if (targetSection) {
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetSection.offsetTop - headerHeight - 10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }

    /* fecha o menu ao clicar em um link no celular */
    if (menu && menu.classList.contains("ativo")) {
      menu.classList.remove("ativo");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* =====================================================
ANIMAÇÃO DE APARECER SEÇÕES AO ROLAR
===================================================== */

const revealItems = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("ativo");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
