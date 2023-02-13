/*
 1. add event handler with the withdraw button
 2. get the withdraw amout from the withdraw input field
 2.5 alsono make sure input into a number by uysing parsefloat()
 3. get prvious withdraw total
 4. calculate total withdraw amount 
 4.5. set total withdraw amount
 */
// step - 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2 
    const withdrowField = document.getElementById('withdraw-field');
    const newWithdrawAmoutString = withdrowField.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutString);

    // stpe-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step -4 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmout;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 claculate new balace total 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmout;
    balanceTotalElement.innerText = newBalanceTotal;



    // step-7
    withdrowField.value = '';

});