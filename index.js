const projectToggleButton = document.querySelector("#projectToggleButton")
const projectTitles = document.querySelector("#projectTitles")

function toggleProjectMenu(){
    if(window.getComputedStyle(projectTitles).display == "flex") projectTitles.style.display = "none"
    else projectTitles.style.display = "flex"
}

projectToggleButton.addEventListener("click", toggleProjectMenu)
