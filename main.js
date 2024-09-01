import './style.css'
let firstname = document.getElementById("firstname")
let secondname = document.getElementById("secondname")
let email = document.getElementById("email")
let message = document.getElementById("message")

let generalInput = document.getElementById("genEnqInput")
let resquestInput = document.getElementById("suppResquestInput")

let submitBtn = document.getElementById("submitBtn")

firstname.addEventListener("onClick", ()=>{
    console.log(firstname.value)
    firstname.style.borderColor = "green"
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
    if (generalInput.disabled = false) {
        generalInput.disabled = true
    }
})

resquestInput.addEventListener("click", ()=>{
    console.log("I'm active too!")
    if (generalInput.disabled = false) {
        generalInput.disabled = true
    }
})

submitBtn.addEventListener("click",()=>{ 

    if (firstname.value = 0) {
        console.log("Your first name is missing")
    }

    if (secondname.value = 0) {
        console.log("Your second name is missing")
    }

})

