const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const EmpIdInput = document.querySelector('#Emp Id');
const JoiningDateInput = document.querySelector('#Joining Date');
const HoursworkedInput = document.querySelector('#Hours worked');
const DesignationInput = document.querySelector('#Designation');


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(usernameInput);
    }

    //Emp Id
    if(EmpIdInput.value.trim()==''){
        setError(EmpIdInput, 'Provide Emp Id');
    }else if(isEmailValid(EmpIdInput.value)){
        setSuccess(EmpIdInput);
    }else{
        setError(EmpIdInput, 'Provide valid Emp Id');
    }

    //Joining Date
    if(JoiningDateInput.value.trim()==''){
        setError(JoiningDateInput, 'Joining date can not be empty');
    }else if(JoiningDateInput.value.trim().length <6 || JoiningDateInput.value.trim().length >20){
        setError(JoiningDateInput);
            // , min="2004-01-01", max="2020-01-01"
    }else {
        setSuccess(JoiningDateInput);
    }

    //Hours worked
    if(HoursworkedInput.value.trim()==''){
        setError(HoursworkedInput, 'Hours Worked can not be empty');
    }else if(HoursworkedInput.value !== HoursworkedInput.value){
        setError(HoursworkedInput, 'Hours Worked does not match');
    }else {
        setSuccess(HoursworkedInput);
    }

    //DesignationInput
    if(DesignationInputvalue.trim()==''){
        setError(DesignationInput, 'Designation can not be empty');
    }else if(DesignationInput.value !== DesignationInput.value){
        setError(DesignationInput, 'Designation does not match');
    }else {
        setSuccess(DesignationInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
function getUser(){
    var userName=document.getElementById("userName").value;
    var HoursWorked=document.getElementById("hoursWorked").value;
    var Designation=document.getElementById("Designation").value;

    var Pay=0;
    switch(Designation){
        case "Manager":
            Pay = HoursWorked*90;
            break;
        case "Consultant":  
            Pay = HoursWorked*70;    
            break;
        case "Trainee": 
            Pay = HoursWorked*45;
            break;
    }
    }
    // var Pay=0;
    // if(Designation == Manager){
    //     Pay = HoursWorked * 90;
    //     alert(document.querySelector.innerHTMl= userName + "who is a " + Designation + " will get $ " + Pay)
    // }
    // if(Designation == Consultant){
    //     Pay = HoursWorked * 70;
    //     alert(document.querySelector.innerHTMl= userName + "who is a " + Designation + " will get $ " + Pay)

    // }if(Designation == Trainee){
    //     Pay = HoursWorked * 45;
    //     alert(document.querySelector.innerHTMl= userName + "who is a " + Designation + " will get $ " + Pay)

    // }

    // }
//     //alert(Pay);
//     window.localStorage.getItem('usernameInput',userName);
//     window.localStorage.getItem('Pay',Pay);
//     window.localStorage.getItem('Des',Designation);
// }

