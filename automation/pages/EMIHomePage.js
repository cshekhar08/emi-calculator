export class EMIHomePage {
    constructor(page) {
        this.page = page;

        // Input Fields
       
        this.loanAmountInput = page.locator('#loanamount');
        this.interestRateInput = page.locator('#loaninterest');
        this.loanTenureInput = page.locator('#loanterm');
        

        // Sliders (The draggable span)
        this.loanAmountSlider = page.locator('#loanamountslider .ui-slider-handle.ui-corner-all.ui-state-default');
        this.interestRateSlider = page.locator('#loaninterestslider .ui-slider-handle.ui-corner-all.ui-state-default');
        this.loanTenureSlider = page.locator('#loantermslider .ui-slider-handle.ui-corner-all.ui-state-default');

        // Calculated Display Values
        this.emiDisplay = page.locator('#emiamount span');

        
        // Table Data for a specific year (e.g., 2026)
        this.tableYearRow = (year) => this.page.locator(`#year${year}`);
        
        // Chart Bar Elements (Highcharts uses SVG rect elements)
        this.chartBars = page.locator('.highcharts-series-0 rect');
        this.chartTooltip = page.locator('.highcharts-tooltip text');

        //Excel Download Button
        this.exportExcelButton = page.getByRole('button', { name: /Download Excel/i });

    }

    async navigate() {
        await this.page.goto('/');
    }

    //Slider Logic
    async moveSlider(sliderLocator, offset) {
        const box = await sliderLocator.boundingBox();
        if (box) {
            await sliderLocator.hover();
            await this.page.mouse.down();
            // Drag slider relative to its start position
            await this.page.mouse.move(box.x + offset, box.y + box.height / 2);
            await this.page.mouse.up();
        }
    }

    // Capture UI Value
    async getEMIValue() {
        const text = await this.emiDisplay.innerText();
        return parseInt(text.replace(/,/g, ''));
    }

    // Extract Table Data for a specific year
async getTableDataForYear(year) {
    const table = this.page.locator('table');

    const row = table
        .getByRole('row')
        .filter({ has: this.page.getByRole('cell', { name: new RegExp(`^.*${year}.*$`) }) })
        .first();

    const cells = row.locator('td');

    const principal = await cells.nth(1).innerText();
    const interest = await cells.nth(2).innerText();
    const totalPayment = await cells.nth(3).innerText();
    const balance = await cells.nth(4).innerText();

    return {
        principal: principal.replace(/[₹,]/g, '').trim(),
        interest: interest.replace(/[₹,]/g, '').trim(),
        totalPayment: totalPayment.replace(/[₹,]/g, '').trim(),
        balance: balance.replace(/[₹,]/g, '').trim()
    };
    }   

async downloadExcel() {
    // Wait until the button is visible
    await this.exportExcelButton.scrollIntoViewIfNeeded();
    
    // Start waiting for download
    const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.exportExcelButton.click()
    ]);

    return download;
}
}