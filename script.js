const passwordEl = document.getElementById('user-password')
const confirmPass = document.getElementById('confirm-password')
const buttonEl = document.getElementById('submit')
const validateEl = document.getElementById('validate-password')

function validatePassword(){
    if(passwordEl.value === "" && confirmPass.value === ""){
        validateEl.textContent = '*password must not be empty'
    }
    if(passwordEl.value===confirmPass.value && !(passwordEl.value === "" && confirmPass.value === "")){
        validateEl.textContent = '*they are the same'
    }
    if(passwordEl.value!==confirmPass.value){
        validateEl.textContent = '*they are not the same'
    }

}

buttonEl.addEventListener('click', validatePassword)
