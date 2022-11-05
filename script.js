let password = document.querySelector('#password')
let confirm = document.querySelector('#confirm')
let signup = document.querySelector('#signup')
let pass = document.querySelector('.pass')
let warning =document.createElement('span')
let form = document.querySelector('.form')
const passwordvalidation = (password,confirm) =>{
  if(password.value !== confirm.value){
    warning.textContent = "*Passwords don`t match"
    pass.after(warning)
  }
  else if(password.validity.valid === false){
    warning.textContent="*The password must contain only numbers and letters"
    pass.after(warning)
   }
   else{
     warning.remove()
   }
}
signup.addEventListener('click',(e)=>{
  e.preventDefault()
  passwordvalidation(password,confirm)
})
