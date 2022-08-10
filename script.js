const passwordEl = document.getElementById('user-password')
const confirmPass = document.getElementById('confirm-password')
const buttonEl = document.getElementById('submit')
const validateEl = document.getElementById('validate-password')

function validatePassword(){
    const validation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/g


    if(passwordEl.value.match(/[password]/gi)){
        validateEl.textContent += `*Your password can\'t equal to password or password `
    }
   /* if(passwordEl.value === "" && confirmPass.value === ""){
        validateEl.textContent = '*Your password must not be empty'
    }
    if(passwordEl.value!==confirmPass.value){
        validateEl.textContent = '*Both passwords are not the same they are not the same'
    }*/
     if(! passwordEl.value.match(validation)){
        validateEl.textContent += ` *Your password must contain between 8 and 20 letters 
        at least one upper case letter, one lower case, one number and one special character`
    }

}

buttonEl.addEventListener('click', validatePassword)
