const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const cpassword= document.getElementById('cpassword');

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function checkEmail(input){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value)){
            showSuccesss(input);
        }
        else{
            showError(input,`Email is not valid`);
        }
}

function showSuccesss(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function checkRequired(input){
    input.forEach(element => {
        if(element.value === ''){
            showError(element,`${element.id.charAt(0).toUpperCase()+element.id.slice(1)} is required`);
        }
        else{
            showSuccesss(element);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${input.id.charAt(0).toUpperCase()+input.id.slice(1)} must be atleast ${min} value`);
    }
    else if(input.value.length > max){
        showError(input,`${input.id.charAt(0).toUpperCase()+input.id.slice(1)} must be less than ${max} value`);
    }
    else{
        showSuccesss(input);
    }
}

function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`${input2.id.charAt(0).toUpperCase()+input2.id.slice(1)} does not match the password value`);
    }
    else{
        showSuccesss(input2);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,cpassword]);
    if(username.value !==''){
        checkLength(username,3,8);
    }
    if(password.value !==''){
        checkLength(password,4,10);
    }
    if(email.value !==''){
        checkEmail(email);
    }
    if(cpassword.value !==''){
        checkPassword(password,cpassword);
    }
});