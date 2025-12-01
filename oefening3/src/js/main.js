// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const logs = []
const total = []

const naam_inp = document.getElementById("team_name")
const value = document.getElementById("team_value")


function logList(naam) {

    logs.push(naam_inp.value,  value.value)
    console.log(logs)
    const log_list = document.querySelector("#log_list");
    log_list.innerHTML += `<li class="list-group-item">naam: ${naam_inp.value} <br> waarde: ${value.value} </li>`
}

function totalList(){


    logs.filter((log) => naam)


    total.push()
    console.log(total)
    const totals_list = document.querySelector("#totals_list")
    totals_list.innerHTML += `<li class="list-group-item">${}</li>`
}



document.getElementById("btn_send").addEventListener("click", () =>{
    logList()
    totalList()
})
