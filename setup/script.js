document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return; // Если не найден dropdown, код дальше не выполняется

  const button = dropdown.querySelector(".dropdown-btn");

  button.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращает закрытие при клике на кнопку
      dropdown.classList.toggle("open");
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
          dropdown.classList.remove("open");
      }
  });
});
