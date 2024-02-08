console.log("hello");

const icon = document.querySelector(".ico");
const menu = document.querySelector(".background")
const cross = document.querySelector(".cross")

// icon.style.display = "none"


console.log(icon);

icon.addEventListener("click", () => {
    menu.style.display = "block"
    icon.style.display = "none"
    cross.style.display = "block"
    menu.style.animation = "menu-in 0.2s linear";

})

cross.addEventListener("click", () => {
    menu.style.animation = "menu-out 0.2s linear";
    setTimeout(() => {
        menu.style.display = "none";
        icon.style.display = "block";
        cross.style.display = "none";
        menu.style.animation = ""; // Reset animation property
    }, 150);
    // icon.style.display = "block"
    // cross.style.display = "none"
    // menu.style.display = "none"

})