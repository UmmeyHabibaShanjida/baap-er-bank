// step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2:get the deposit amount from the deposit input field
    // for input field use .value to the get value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3:get the deposit total amount 
    // for non-input (element other than input,textarea)use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString= depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // step-4:add numbers to set the total deposit
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
    //  set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    
    // step-5:get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    

    // step-7:clear the deposit field
    depositField.value = '';
})