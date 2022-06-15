const form = document.querySelectorAll('#form');
const firstname = document.querySelectorAll('#firstname');
const password = document.querySelectorAll('#password');
const lastname = document.querySelectorAll('#lastname');
const email = document.querySelectorAll('#email');


form.addEventListener("submit", (e)=> {
    e.preventDefault()

        checkInput();
    });

function checkInput(){
    
    const firstnameValue=firstname.value.trim();

    const lastnameValue =lastname.value.trim();
    const emailValue =email.value.trim();
    const passwordValue= password.value.trim();

    if(firstnameValue === ''){
        setFailFor(firstname, 'firstname cannot be blank')
    }
    else{
        setSuccessFor(firstname)
    }


}

function setFailFor(firstname, message){
    const formInput=input.parentElement;
    const span =formInput.querySelctor('span')
    span.innerText= message
    formInput.className='.form-input.error input';

}
function setSuccessFor(input){
    const formInput =input.parentElement;
    formInput.className ='form-input success'
}
