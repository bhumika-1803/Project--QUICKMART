var data = []
document.querySelector('form').addEventListener('submit',loginSubmit)
function loginSubmit(){
    event.preventDefault()
    var userName_ = document.querySelectorAll("input")[0].value
    var password_ = document.querySelectorAll("input")[1].value
    var signUpDetails = JSON.parse(localStorage.getItem('signUpData'))
    console.log(signUpDetails)
    var flag = 0
    if(userName_!='' && password_!=''){
        for(let i=0;i<signUpDetails.length;i++){
            if(signUpDetails[i]['email']==userName_ && signUpDetails[i]['password']==password_){
                alert("Correct Details :)")
                flag = 1
                window.location.href = 'products.html'
                break
            }
        }
        if(flag==0){
            alert("Incorrect Details :(")
        }
    }
    else{
        alert('Details Missing :( Fill them first')
    }
}