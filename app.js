function getSavings() {
    let balance = parseFloat(document.getElementById('balance').innerText);
    const saveInput = parseFloat(document.getElementById('save-input').value);
    let savingsAmount = parseFloat(document.getElementById('savings-amount').innerText);
    const savings = parseFloat(balance * saveInput / 100);
    document.getElementById('savings-amount').innerText = savings;
    return savings;
}
function getnewBalance() {

}

function getTotalExpenses() {
    const incomeInput = parseFloat(document.getElementById('income-input').value);
    const foodInput = parseFloat(document.getElementById('food-input').value);
    const rentInput = parseFloat(document.getElementById('rent-input').value);
    const clothesInput = parseFloat(document.getElementById('clothes-input').value);
    const totalExpenses = parseFloat(document.getElementById('total-expenses').value);
    const newTotalExpenses = foodInput + rentInput + clothesInput;
    document.getElementById('total-expenses').innerText = newTotalExpenses;
    return newTotalExpenses;
}

// handling calc button 
document.getElementById('calc-btn').addEventListener('click', function () {
    // total expenses calculation 
    const newTotalExpenses = getTotalExpenses();

    // total balance calculation 
    const incomeInput = parseFloat(document.getElementById('income-input').value);
    let prevbalance = document.getElementById('balance').innerText;
    const balance = incomeInput - newTotalExpenses;
    document.getElementById('balance').innerText = balance;



});
// handling save button
document.getElementById('save-btn').addEventListener('click', function () {

    let mySavingsAmount = document.getElementById('savings-amount');
    mySavingsAmount = getSavings();


    let prevbalance = parseFloat(document.getElementById('balance').innerText);
    console.log(prevbalance);
    let remainingBalance = document.getElementById('remaining-balance');
    remainingBalance = prevbalance - mySavingsAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;



})

