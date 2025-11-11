const expenses = {
    food: 2500,
    travel:1500,
    rent:1000,
    bills:1200,
    leisure:2000
};

const expenseValues = Object.values(expenses);

const total = expenseValues.reduce((acc,val)=>acc+val,0);
const avg = total/expenseValues.length;
const finalAmount = total + total * 0.10;

console.log("Total:",total.toFixed(2));
console.log("Average:",avg.toFixed(2));
console.log("Final amount after Tax:",finalAmount.toFixed(2));