

function toggleMenu()
{
    document.getElementById("navagation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;