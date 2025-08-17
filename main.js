
async function loadComponent(id, file) {
  const resp = await fetch(file);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
window.onload = () => {
  loadComponent('header', 'header.html');
  loadComponent('footer', 'footer.html');
};
