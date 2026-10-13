/* ADMIGI SOLUTION — interactions */
(() => {
  "use strict";

  const WHATSAPP_NUMBER = "6285780294292";
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
      siteNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) closeMenu();
    });
  }

  function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.querySelectorAll(".service-ask").forEach(button => {
    button.addEventListener("click", () => {
      const service = button.dataset.service || "layanan Admigi Solution";
      openWhatsApp(`Halo Admigi Solution, saya ingin bertanya tentang layanan: ${service}.\n\nBoleh dibantu informasi proses, estimasi biaya, dan waktu pengerjaannya?`);
    });
  });

  const filterButtons = document.querySelectorAll(".filter-button");
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      portfolioCards.forEach(card => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  const dialog = document.getElementById("portfolioDialog");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogDescription = document.getElementById("dialogDescription");
  const dialogAsk = document.getElementById("dialogAsk");
  const dialogClose = document.getElementById("dialogClose");

  portfolioCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title || "Contoh Karya";
      const description = card.dataset.description || "";
      dialogTitle.textContent = title;
      dialogDescription.textContent = description;
      dialogAsk.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Admigi Solution, saya tertarik dengan contoh karya "${title}". Saya ingin bertanya tentang layanan serupa.`)}`;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else window.alert(`${title}\n\n${description}`);
    });
  });
  if (dialogClose && dialog) dialogClose.addEventListener("click", () => dialog.close());
  if (dialog) dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  const orderForm = document.getElementById("orderForm");
  const formFeedback = document.getElementById("formFeedback");
  if (orderForm) {
    orderForm.addEventListener("submit", event => {
      event.preventDefault();
      formFeedback.textContent = "";
      if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        formFeedback.textContent = "Mohon lengkapi semua kolom wajib terlebih dahulu.";
        return;
      }
      const formData = new FormData(orderForm);
      const name = String(formData.get("customerName") || "").trim();
      const business = String(formData.get("businessName") || "").trim();
      const service = String(formData.get("serviceChoice") || "").trim();
      const description = String(formData.get("jobDescription") || "").trim();
      const deadline = String(formData.get("deadline") || "").trim();

      if (!name || !service || !description) {
        formFeedback.textContent = "Mohon isi nama, pilihan layanan, dan deskripsi pekerjaan.";
        return;
      }

      const lines = [
        "Halo Admigi Solution, saya ingin mengajukan permintaan layanan.",
        "",
        `Nama: ${name}`,
        `Usaha/Instansi: ${business || "-"}`,
        `Layanan: ${service}`,
        `Deskripsi pekerjaan: ${description}`,
        `Target waktu: ${deadline || "Belum ditentukan"}`,
        "",
        "Mohon informasi estimasi biaya dan waktu pengerjaan. Terima kasih."
      ];
      openWhatsApp(lines.join("\n"));
    });
  }

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // Smooth-scroll fallback for older browsers; CSS handles modern browsers.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });
})();
