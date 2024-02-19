let mobileMenu = document.getElementById("mobile-menu");
let burgerIcon = document.getElementById("hand-burger");
let closeIcon = document.getElementById("close");


function openMenu(){
    mobileMenu.style.transform = "translateX(0%)";
}
function closeMenu(){
    mobileMenu.style.transform = "translateX(-100%)"; 
}

burgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);