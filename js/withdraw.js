// add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithDrawAmount)){
      alert('Please provide a valid number');
      return;
    }
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

      const balanceTotalElement = document.getElementById('balance-total');
      const previousBalanceTotalString = balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      if(newWithDrawAmount > previousBalanceTotal){
        alert('Baap er bank e tk nai');
        return;
      }

      const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
      withdrawTotalElement.innerText = currentWithdrawTotal;

      const newBalanceTotal  = previousBalanceTotal - newWithDrawAmount;
      balanceTotalElement.innerText = newBalanceTotal;

     
})