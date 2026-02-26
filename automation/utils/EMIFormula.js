export function calculateExpectedEMI(p, annualRate, years) {
    const r = annualRate / 12 / 100; // Monthly interest rate
    const n = years * 12; // Total number of months
    
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    // Most financial apps round to the nearest whole number
    return Math.round(emi);
}

