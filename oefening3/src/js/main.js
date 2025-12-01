// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

const naam_inp = document.getElementById("team_name")
const value = document.getElementById("team_value")

function logList() {
    const logs = []
    logs.push(naam_inp.value, value.value)
    console.log(logs)
    const log_list = document.querySelector("#log_list");
    log_list.innerHTML += `<li class="list-group-item">naam: <strong>${naam_inp.value}</strong> <br> waarde: <strong>${value.value}</strong> </li>`

    totalList(naam_inp.value)
}
function totalList(team){
    const groep = []
    groep.push(team)
    const total = document.querySelector("#totals_list")
    total.innerHTML += `<li class="list-group-item">het aantal van de groep met de naam <strong>${naam_inp.value}</strong> is <strong>${value.value}</strong></li>`
}



document.getElementById("btn_send").addEventListener("click", () =>{

    if(naam_inp.value.trim() === "" || value.value.trim() === ""){
        alert("vul de vakjes juist in")
    }else{
        logList()
    }
})
