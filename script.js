document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const faqAnswer = faqItem.querySelector(".faq-answer");

      // Verifica se o item clicado já está ativo
      const isActive = faqItem.classList.contains("active");

      // Fecha todos os outros FAQs abertos
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Se o item clicado não estava ativo, abre ele dinamicamente
      if (!isActive) {
        faqItem.classList.add("active");
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      }
    });
  });
});
