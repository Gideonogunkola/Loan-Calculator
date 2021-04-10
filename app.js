// Define Variable
const form = document.querySelector('#loan-form')
const amount = document.querySelector('#amount')
const interest = document.querySelector('#interest')
const years = document.querySelector('#years')
const monthlyPayment = document.querySelector('#monthly-payment')
const totalPayment = document.querySelector('#total-payment')
const totalnterest = document.querySelector('#total-interest')

// Listen for Submit
form.addEventListener('submit', calculateResult)

//calculateResult Function
function calculateResult(e){
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayment = parseFloat (years.value) * 12;


//compute montly payemtn
const x = Math.pow(1 + calculatedInterest, calculatedPayment);
const monthly = (principal * x * calculatedInterest) / (x-1);

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalnterest.value = (totalPayment.value - principal).toFixed(2);
}
else{
showError('Please check your number')
}

e.preventDefault();
}
function showError(error){
    //create element
    const errorDiv = document.createElement('div')
    
    //add class
    errorDiv.className = 'alert alert-danger'
    
    //create text node and appendchild
    errorDiv.appendChild(document.createTextNode(error))
    
    //get element
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    
    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //clear after 3 seconds
    setTimeout(clearError, 3000)
}

//clearError function
function clearError (){
   document.querySelector('.alert').remove()
}


// //loader
// const loader = document.querySelector('#loading')
// if (form.addEventListener('submit', calculateResult)){
// loader.style.display = 'block'
// }
// else{
//     loader.style.display = 'none';
// }
