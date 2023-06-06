const projectToggleButton = document.querySelector("#projectToggleButton")
const projectTitles = document.querySelector("#projectTitles")

function toggleProjectMenu(){
    if(window.getComputedStyle(projectTitles).display == "flex") projectTitles.style.display = "none"
    else projectTitles.style.display = "flex"
}

function menuToggle(){
    let x = document.querySelector("header nav");    
    if (x.classList.contains("responsive")) x.classList.remove("responsive")              
    else x.classList.add("responsive") 
}

projectToggleButton.addEventListener("click", toggleProjectMenu)
