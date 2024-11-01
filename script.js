// script.js
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
      sidebar.style.right = '-100%';
    } else {
      sidebar.style.right = '0px';
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    feather.replace(); // Inisialisasi ikon Feather
  });
  