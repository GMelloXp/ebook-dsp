

// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".faq-item");
//   faqItems.forEach(item => {
//     item.addEventListener("click", function () {
//       this.classList.toggle("active");
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".faq ul li");

//   faqItems.forEach((item) => {
//       const question = item.querySelector("strong");

//       question.addEventListener("mouseenter", () => {
//           item.classList.add("active");
//       });

//       item.addEventListener("mouseleave", () => {
//           item.classList.remove("active");
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      answer.style.display = "none"; // Esconde a resposta inicialmente

      question.addEventListener("click", function() {
          const isActive = answer.style.display === "block";

          // Fecha todas as respostas antes de abrir a nova
          faqItems.forEach(i => i.querySelector(".faq-answer").style.display = "none");

          // Se a resposta não estava visível, exibe
          if (!isActive) {
              answer.style.display = "block";
          }
      });
  });
});


