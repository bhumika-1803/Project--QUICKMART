var data = ( JSON.parse(localStorage.getItem("signUpData")) || [])
document.querySelector('form').addEventListener('submit',formSubmit)
function formSubmit(){
    event.preventDefault()
    var userName_ = document.querySelectorAll("input")[0].value
    var email_ = document.querySelectorAll("input")[1].value
    var phoneNumber_ = document.querySelectorAll("input")[2].value
    var password_ = document.querySelectorAll("input")[3].value
    if(userName_!='' && email_!='' && phoneNumber_!='' && password_!=''){
        var ob = {
            userName : userName_,
            email : email_,
            phoneNumber : phoneNumber_,
            password : password_
        }
        data.push(ob)
        localStorage.setItem('signUpData',JSON.stringify(data))
        console.log(data)
        alert('Signup Successfull :P')
        window.location.href="login.html"
    }
    else{
        alert('Details Missing :( Fill them first')
    }
}