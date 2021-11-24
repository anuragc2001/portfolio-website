let theme = localStorage.getItem("theme")
if (theme == null) {
    setTheme("blue")
} else {
    setTheme(theme)
}


const themeDots = document.getElementsByClassName("theme-dot")

for (let index = 0; index < themeDots.length; index++) {
    const element = themeDots[index];

    element.addEventListener("click", function () {
        const mode = this.dataset.mode
        // console.log(mode)
        setTheme(mode);
    })
}
function setTheme(mode) {
    document.getElementById("theme-style").href = "./styles/" + mode + ".css"
    localStorage.setItem("theme", mode)
}
