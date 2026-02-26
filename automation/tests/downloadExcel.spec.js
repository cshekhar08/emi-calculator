import { test, expect } from '@playwright/test';
import { EMIHomePage } from '../pages/EMIHomePage.js';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os'; // Added for temp directory support
import path from 'path';

test('Download and validate Excel export', async ({ page }) => {
    const emiPage = new EMIHomePage(page);
    await emiPage.navigate();

    // 1. Fill loan data
    await emiPage.loanAmountInput.fill('2500000');
    await emiPage.interestRateInput.fill('9');
    await emiPage.loanTenureInput.fill('20');
    await page.keyboard.press('Enter');

    // 2. Download using POM method
    const download = await emiPage.downloadExcel();

    //console.log('Download triggered successfully');
    //console.log('Suggested filename:', download.suggestedFilename());

    // 3. Validate download happened
    expect(download).toBeTruthy();
    expect(download.suggestedFilename()).toContain('.xlsx');


    // 4. Save to temp folder
    const tempFolder = os.tmpdir();
    const filePath = path.join(tempFolder, download.suggestedFilename());
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();

    // console.log('File saved at:', filePath);
    //console.log('File exists:', fs.existsSync(filePath));

    // 5. Read Excel
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1);
    

    // 6. Basic structure validation
    expect(worksheet).toBeDefined();
    expect(worksheet.rowCount).toBeGreaterThan(10);

    console.log('Total rows in sheet:', worksheet.rowCount);

    // 7. Validate headers (Amortization Table)
    const headerRow = worksheet.getRow(12);

    expect(String(headerRow.getCell(2).value)).toContain('Month');
    expect(String(headerRow.getCell(3).value)).toContain('Principal');
    expect(String(headerRow.getCell(4).value)).toContain('Interest');

    /*
    console.log('Header Row Values:', [
    headerRow.getCell(1).value,
    headerRow.getCell(2).value,
    headerRow.getCell(3).value,
    headerRow.getCell(4).value,
    headerRow.getCell(5).value
    ]);
    */

    // 8. Validate EMI value exists
    const emiValue = worksheet.getRow(7).getCell(2).value;
    expect(Number(emiValue)).toBeGreaterThan(0);

    console.log('EMI Value from Excel:', emiValue);

    // Cleanup
    fs.unlinkSync(filePath);
});