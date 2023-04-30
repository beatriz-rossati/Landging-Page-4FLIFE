//formulario da section 2 da main: range de preço
const value = document.querySelector("#value")
const input = document.querySelector("#price")

value.textContent = input.value
value.textContent += ",00"

input.addEventListener("input", (event) => {
  value.textContent = event.target.value + ",00"
})

//botão section 2 sendo substituido por loading onclick
function loader(event){
  event.target.classList.add("loader-button")
  event.target.innerHTML=""
  setTimeout( ()=>{
    event.target.classList.remove("loader-button")
    event.target.innerHTML="Comece a buscar!"
  }, 3000)
}

// botao formulario alert e limpar campos
const name = document.getElementById("formName")
const email = document.getElementById("formEmail")
const message = document.getElementById("formMessage")

function validateForm(){
  if (name.value == "" || email.value == "" || message.value == "")
    alert ("Por favor, preencha todos os campos!")
  else {
    alert (`Olá ${name.value}! Em breve retornaremos sua mensagem através do email ${email.value}. Agradecemos o contato!`)
    name.value = ""
    email.value = ""
    message.value = ""
  }
}


//ação nos links do footer
function alertFeature(){
    alert ("Essa feature ainda não foi implementada, aguarde...")
}
