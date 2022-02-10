// deposit handle event 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit amount 
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = depositTotal.innerText;
    const totalDepositAmount = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = totalDepositAmount;

    // update balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceAmount = previousBalanceTotal + parseFloat(newDepositAmount);

    balanceTotal.innerText = newBalanceAmount;



    // clear deposit input value 
    depositInput.value = '';
});

// handler withdraw handle 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawTotal = document.getElementById('withdraw-amount');
    const withdrawTotalText = withdrawTotal.value;
    const newWithdrawTotalAmount = parseFloat(withdrawTotalText);

    // set total withdraw 
    const previouswithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = previouswithdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);

    const newWithdrawAmount  = newWithdrawTotalAmount + previousWithdrawTotalAmount;

    previouswithdrawTotal.innerText = newWithdrawAmount;

    // update total balance  
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    const newTotalBalanceAmount = balanceTotalAmount - newWithdrawTotalAmount;

    balanceTotal.innerText = newTotalBalanceAmount;

    // clear withdraw inpur 
    withdrawTotal.value = '';



});