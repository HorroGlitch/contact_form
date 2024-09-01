import './style.css'
let firstname = document.getElementById("firstname")
let secondname = document.getElementById("secondname")
let email = document.getElementById("email")
let message = document.getElementById("message")

let generalInput = document.getElementById("genEnqInput")
let resquestInput = document.getElementById("suppResquestInput")

let submitBtn = document.getElementById("submitBtn")

firstname.addEventListener("change", ()=>{
    console.log(firstname.value)
})

secondname.addEventListener("change", ()=>{
    console.log(secondname.value)
})

email.addEventListener("change", ()=>{
    console.log(email.value)
})

message.addEventListener("change", ()=>{
    console.log(message.value)
})



generalInput.addEventListener("click", ()=>{
    console.log("I'm active!")
    if (generalInput.disabled == false) {
        generalInput.disabled == true
    }
})

resquestInput.addEventListener("click", ()=>{
    console.log("I'm active too!")
    if (generalInput.disabled == false) {
        generalInput.disabled == true
    }
})

submitBtn.addEventListener("click",()=>{ 

    if (firstname.value == 0) {
        firstname.style.borderColor = "red"
    } else if (firstname.value > 5) {
        firstname.style.borderColor = "green"
    }

    if (secondname.value == 0) {
        secondname.style.borderColor = "red"
    } else if (secondname.value >= 5) {
        secondname.style.borderColor = "green"
    }

    if (email.value == 0) {
        email.style.borderColor = "red"
    } else if (email.value >= 5) {
        email.style.borderColor = "green"
    }

    if (message.value == 0) {
        message.style.borderColor = "red"
    } else if (message.value >= 15) {
        messagee.style.borderColor = "green"
    }

})

