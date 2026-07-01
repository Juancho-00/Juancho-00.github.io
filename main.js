// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  initAOS();
  initNavbar();
  initPortfolioFilters();
  initSmoothScroll();
});

// ==========================================
// AOS - ANIMACIONES AL HACER SCROLL
// ==========================================
function initAOS() {
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });
}

// ==========================================
// NAVBAR - CAMBIA ESTILO AL HACER SCROLL
// ==========================================
function initNavbar() {
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Cerrar el menú mobile al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

// ==========================================
// PORTFOLIO FILTERS
// ==========================================
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Activar botón
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.opacity = "0";
          item.style.display = "block";
          setTimeout(() => {
            item.style.transition = "opacity 0.4s ease";
            item.style.opacity = "1";
          }, 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.display = "none";
          }, 400);
        }
      });
    });
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById("mainNav").offsetHeight;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}