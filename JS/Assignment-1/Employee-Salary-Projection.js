let currentSalary = 65000;
const annualInc =  10;
const projection = [];

for(let i=1;i<=5;i++){
    currentSalary = currentSalary + (currentSalary*annualInc/100);
    projection.push({year:i,salary:Math.round(currentSalary)});
}

console.table(projection);