const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

const searchInput = document.querySelector("#surface-search");
if (searchInput) {
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    rows.forEach((row) => {
      row.hidden = term.length > 0 && !row.textContent.toLowerCase().includes(term);
    });
  });
}
