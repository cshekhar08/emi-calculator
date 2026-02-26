import { test, expect } from '@playwright/test';
import { EMIHomePage } from '../pages/EMIHomePage.js';

test('Update Loan Details using Sliders', async ({ page }) => {
    const emiPage = new EMIHomePage(page);
    await emiPage.navigate();

    // Move Loan Amount Slider
    await emiPage.moveSlider(emiPage.loanAmountSlider, 100);
    const amount = await emiPage.loanAmountInput.inputValue();
    console.log(`Updated Amount: ${amount}`);

    // Move Interest Rate Slider
    await emiPage.moveSlider(emiPage.interestRateSlider, 80);
    const rate = await emiPage.interestRateInput.inputValue();
    console.log(`Updated Rate: ${rate}`);

    // Move Tenure Slider (Drag left by 50 pixels)
    await emiPage.moveSlider(emiPage.loanTenureSlider, -50);
    let tenure = await emiPage.loanTenureInput.inputValue();
    console.log(`Updated Tenure: ${tenure}`);
});