import { test, expect } from '@playwright/test';
import { EMIHomePage } from '../pages/EMIHomePage.js';
import { calculateExpectedEMI } from '../utils/EMIFormula.js'; // Import the utility

test('Validate UI EMI using utility formula', async ({ page }) => {
    const emiPage = new EMIHomePage(page);
    await emiPage.navigate();

    const P = 4000000; // Principal amount
    const R = 6; // Annual interest rate in percentage
    const Y = 15; // Loan tenure in years

    // Fill inputs
    await emiPage.loanAmountInput.fill(P.toString());
    await emiPage.interestRateInput.fill(R.toString());
    await emiPage.loanTenureInput.fill(Y.toString());
    await page.keyboard.press('Enter');

    // Get value from UI
    const uiEMI = await emiPage.getEMIValue();

    // Use Utility to get expected value
    const expectedEMI = calculateExpectedEMI(P, R, Y);

    // Validation
    console.log(`UI EMI: ${uiEMI}, Calculated: ${expectedEMI}`);
    expect(uiEMI).toBe(expectedEMI);
});