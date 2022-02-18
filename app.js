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
    console.log(newTotalExpenses);
    // total balance calculation 
    const incomeInput = parseFloat(document.getElementById('income-input').value);
    let prevbalance = document.getElementById('balance').innerText;
    const balance = incomeInput - newTotalExpenses;
    document.getElementById('balance').innerText = balance;
    console.log(balance);
});