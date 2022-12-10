
// This function will switch these ids between class of open and not having class of open 
function toggleMenu()
{
    document.getElementById("navagation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

x = document.getElementById("hamburgerBtn");

// When x is clicked it will call the toggleMenu function
x.onclick = toggleMenu;