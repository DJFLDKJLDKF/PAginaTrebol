// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

// Verificar que los elementos existan antes de agregar el evento
if (btn && menu) {
  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna (agrega o quita) la clase "active" en el menú
    // Esto hace que se muestre o se oculte
    menu.classList.toggle("active");
    
    // Cambiar el ícono entre hamburguesa (☰) y X (✕)
    if (menu.classList.contains("active")) {
      btn.innerHTML = "&#10005;"; // X
    } else {
      btn.innerHTML = "&#9776;"; // ☰
    }
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
      btn.innerHTML = "&#9776;";
    }
  });
}
