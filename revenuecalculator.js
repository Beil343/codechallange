// Define constants for basic salary and tax, NHIF and NSSF rates
const BASIC_SALARY = 50000;
const TAX_RATE = 0.3;
const NHIF_RATE = 0.025;
const NSSF_RATE = 0.06;

// Get user input for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter the total amount of benefits received: "));

// Calculate gross salary
const grossSalary = BASIC_SALARY + basicSalary + benefits;

// Calculate deductions
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculate net salary
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

// Display results
console.log(`Gross salary: ${grossSalary.toFixed(2)}`);
console.log(`Tax deduction: ${taxDeduction.toFixed(2)}`);
console.log(`NHIF deduction: ${nhifDeduction.toFixed(2)}`);
console.log(`NSSF deduction: ${nssfDeduction.toFixed(2)}`);
console.log(`Net salary: ${netSalary.toFixed(2)}`);
console.log(netSalary)
NetDisplay.innerText=`Your salary is ${netSalary}`