// step 1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 : get the deposit amount form the deposit input field
    // For input field use .value to the value inside the input field 
    const depositField = document.getElementById('deposit-field')
    const depositAmount = depositField.value;
    
    // step-3: get  the current deposit total
    // for none input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount
})