
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

const submit_btn = document.getElementById("submit-btn")

submit_btn.addEventListener("click", function () {
    let name = document.forms["contact-form"]["name"].value
    let subject = document.forms["contact-form"]["subject"].value
    let email = document.forms["contact-form"]["message"].value
    let message = document.forms["contact-form"]["email"].value

    if ((name.length && subject.length && email.length && message.length) > 0) {
        Swal.fire({
            title: 'Thank you for contacting us!',
            text: 'We will get back to you soon!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    } else {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill all the fields!',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
})



//