import { test, expect } from '@playwright/test';
import { EMIHomePage } from '../pages/EMIHomePage.js';

test('Validate Bar Chart and Table synchronization', async ({ page }) => {
    const emiPage = new EMIHomePage(page);
    await emiPage.navigate();

    // 1. Set specific values to make data predictable
    await emiPage.loanAmountInput.fill('5000000');
    await emiPage.interestRateInput.fill('9');
    await emiPage.loanTenureInput.fill('20');
    await page.keyboard.press('Enter');

    // 2. Extract Data from Table for Year 2026
    const targetYear = 2026;
    const tableData = await emiPage.getTableDataForYear(targetYear);
    console.log(`Table Data for ${targetYear}:`, tableData);

    // 3. Interact with the Bar Chart
    // We hover over the first bar (which typically represents the first full year)
    const firstBar = emiPage.chartBars.first();
    await firstBar.hover();


   // 4. Verify Tooltip matches Table with multiple possible matches
    await expect(emiPage.chartTooltip).toBeVisible();
    const tooltipText = await emiPage.chartTooltip.textContent();

    // Format table values using Indian locale
    const formattedInterest = Number(tableData.interest).toLocaleString('en-IN');
    const formattedPrincipal = Number(tableData.principal).toLocaleString('en-IN');
    const formattedTotal = Number(tableData.totalPayment).toLocaleString('en-IN');

    // Track matches
    const matches = [];

    if (tooltipText.includes(formattedInterest)) {
        matches.push(`Interest: ${formattedInterest}`);
        expect(tooltipText).toContain(formattedInterest);
    }
    if (tooltipText.includes(formattedPrincipal)) {
        matches.push(`Principal: ${formattedPrincipal}`);
        expect(tooltipText).toContain(formattedPrincipal);
    }
    if (tooltipText.includes(formattedTotal)) {
        matches.push(`Total Payment: ${formattedTotal}`);
        expect(tooltipText).toContain(formattedTotal);
    }

    // Log all matches for debugging
    if (matches.length > 0) {
        console.log(`Matched values for year ${targetYear}: ${matches.join(", ")}`);
    } else {
        console.log(`No match found in tooltip for year ${targetYear}: ${tooltipText}`);
        throw new Error(`Tooltip does not contain Interest, Principal, or Total Payment for year ${targetYear}`);
    }
 });