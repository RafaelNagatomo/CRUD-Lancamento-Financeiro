exibeMenuRelease()

// Function to set every div's display "none" and
// remove every sidebar's buttons class "selected"
function noneRemove() {

    let classMain = document.querySelectorAll(".main")
    let butons = document.querySelectorAll("nav > button")

    classMain.forEach(eClassMain => {
        eClassMain.style.display = 'none'
    })

    butons.forEach(eButons => {
        eButons.classList.remove("selected")
    })
}

//display menu Dashboard
function exibeMenuDashboard() {

    noneRemove()
    document.getElementById("dashboard").style.display = 'block';
    document.getElementById("b-dashboard").classList.add("selected");
}

//display menu Release
function exibeMenuRelease() {

    noneRemove()
    document.getElementById("releases").style.display = 'block';
    document.getElementById("b-releases").classList.add("selected");
}

//display menu Budget
function exibeMenuBudget() {

    noneRemove()
    document.getElementById("budget").style.display = 'block';
    document.getElementById("b-budget").classList.add("selected");
}

//display menu Settings
function exibeMenuSettings() {

    noneRemove()
    document.getElementById("settings").style.display = 'block';
    document.getElementById("b-settings").classList.add("selected");
}

