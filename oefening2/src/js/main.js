// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const email = document.getElementById("notify_email")
const popup = document.getElementById("notify_popup")

const timeout = document.getElementById("notify_interval")
const output = document.getElementById("notify_output")

function saveSettings() {
    localStorage.setItem("email-notify", JSON.stringify(email.checked))
    localStorage.setItem("email-popup", JSON.stringify(popup.checked));
    localStorage.setItem("timeout", JSON.stringify(timeout.value))
}
function loadSettings() {
    renderSettings();
}
function renderSettings() {
    email.checked = JSON.parse(localStorage.getItem("email-notify"))
    popup.checked = JSON.parse(localStorage.getItem("email-popup"))
    timeout.value = JSON.parse(localStorage.getItem("timeout"))
}

const melding = {
     aan: "aan",
     uit: "uit"
}




console.log(parseInt(timeout.value) * 60)






document.addEventListener("DOMContentLoaded", () => {
    loadSettings();

    document.getElementById("btn_notify_save").addEventListener("click", () =>{
        saveSettings();
    })

    document.getElementById("btn_notify_show").addEventListener("click", () =>{
        output.innerHTML = `email meldingen staan: <strong>${email.checked ? melding.aan: melding.uit}</strong>
        <br>
        popups staan: <strong>${popup.checked ? melding.aan: melding.uit}</strong>
        <br>
        timeout = <strong>${timeout.value}</strong> minuten
        `
    })


});