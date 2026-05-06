const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

if (sidebar && toggleSidebar) {
  toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
}
