// event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmout = depositField.value;
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmout) ;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = balanceTotalElement.innerText;
    const previousBalance = parseFloat(balanceTotal);
    const currentBalanceTotal = previousBalance + parseFloat(newDepositAmout);
    balanceTotalElement.innerText = currentBalanceTotal;



    depositField.value = '';
});