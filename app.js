const themeToggle = document.getElementById("theme-toggle")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")
const body = document.body

themeToggle.addEventListener("click", ()=> {
    body.classList.contains("dark-mode") 
    ? LightMode() 
    : DarkMode();
})

sun.addEventListener("click", ()=> {
    body.classList.contains("dark-mode") 
    ? LightMode() 
    : DarkMode();
})

function DarkMode() {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
}

function LightMode() {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
}