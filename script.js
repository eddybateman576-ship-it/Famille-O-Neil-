
document.addEventListener("DOMContentLoaded", () => {
  // Met en évidence la page actuellement consultée.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navigation a").forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Affiche un message si le formulaire de recrutement est présent.
  const recruitmentForm = document.querySelector("#recruitment-form");

  if (recruitmentForm) {
    recruitmentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const result = document.querySelector("#form-result");

      if (result) {
        result.textContent =
          "Ta candidature est prête ! Contacte le staff O'Neil sur Discord pour la transmettre.";
      }
    });
  }
});
