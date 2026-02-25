**Test Plan – EMI Calculator Financial Web Application**

**1. Introduction**
This document outlines the comprehensive testing strategy for the EMI Calculator Financial Web Application available at
https://emicalculator.net/

The application provides loan repayment calculations for:

• Home Loan
• Personal Loan
• Car Loan

The objective of this test plan is to ensure:

• Mathematical accuracy of EMI calculations
• Functional correctness across modules
• Data integrity in reports and visualizations
• Cross-browser compatibility
• High reliability expected from a financial tool
Given the financial nature of the application, precision and consistency are considered critical quality attributes.


**2. Scope of Testing**
**2.1 In-Scope**

**Functional Modules**

• Home Loan Calculator
• Personal Loan Calculator
• Car Loan Calculator

**Input Mechanisms**

• Manual text input fields
• Slider-based input controls
• Toggle between Years (Yr) and Months (Mo)

**Calculation Validation**

• EMI (Equated Monthly Installment)
• Total Interest Payable
• Total Payment (Principal + Interest)

**Data Presentation**

• Pie Chart (Principal vs Interest)
• Bar Chart (Amortization schedule)
• Year-wise amortization table

**Reporting**

• Excel report download
• PDF report download
• Data consistency between UI and downloaded file

**Cross-Browser & Responsive Testing**

• Chrome
• Firefox
• Safari
• Edge
• Desktop, Tablet, and Mobile viewport validation


**2.2 Out-of-Scope**

• Third-party advertisements displayed on the website
• External bank links or redirection flows
• Financial advisory content outside calculator modules


**3. Test Strategy**
Testing will follow a multi-layered quality assurance approach.

**3.1 Functional Testing**

• Verification of all input fields and sliders
• Toggle functionality between Years and Months
• Real-time recalculation on input change
• Proper reset/refresh behavior
• Validation of UI consistency across modules

**3.2 Mathematical & Calculation Validation**
All EMI outputs will be independently validated using the standard EMI formula:
E= P * r(1+r)^n/((1+r)^n-1)

Where:

• E is EMI
• P = Principal Loan Amount
• r = rate of interest calculated on monthly basis. (i.e., r = Rate of Annual interest/12/100. If rate of interest is 10.5% per annum, then r = 10.5/12/100=0.00875)
• n = loan term / tenure / duration in number of months

Automation scripts will:

• Compute EMI independently
• Compare against UI results
• Validate with a tolerance of ±0.01 (to account for floating-point precision)
Additionally:
• Total Payment = Principal + Total Interest must match exactly
• Amortization schedule cumulative values must match total interest


**3.3 Boundary Value Analysis**
Test scenarios include:

• Minimum Loan Amount (0)
• Maximum Loan Amount (200 Lakhs)
• Minimum Interest Rate (5%)
• Maximum Interest Rate (20%)
• Minimum Tenure (0/1 month)
• Maximum Tenure (30 years / 360 months)

**3.4 Negative Testing**

•   	Alphabetic input in numeric fields
• Special characters
• Extremely high values beyond allowed range
• Empty fields
• Decimal precision edge cases
• Copy-paste invalid data


**3.5 Regression Testing**
Regression testing will ensure that updates to calculation logic, UI components, or input mechanisms do not impact existing functionality or financial accuracy.
The regression suite will:

• Validate EMI recalculation when modifying Loan Amount, Interest Rate, and Tenure.
• Ensure Total Interest and Total Payment remain mathematically accurate (±0.01 tolerance).
• Verify synchronization between EMI output, amortization table, and charts.
• Cover boundary values and common real-world loan scenarios.
• Execute across supported browsers using automated Playwright scripts.

Regression execution will be triggered after any code change affecting calculation logic, UI behavior, or reporting components.


**3.6 UI/UX Testing**

• Chart rendering accuracy
• Synchronization between table and graphs
• Responsive behavior on smaller screens
• Layout stability under large numbers


**3.7 Cross-Browser Testing**
Executed via Playwright automation across:

• Chrome
• Firefox
• Safari
• Edge

Validation includes:

• Calculation consistency
• Slider behavior
• Chart rendering
• File download functionality

**3.8 Performance Testing (Lightweight)**

• Recalculation time after input change (< 1 second expected)
• Chart rendering performance
• Excel download completion time
• PDF download completion time
• Slider responsiveness under rapid changes

**4. Automation Strategy**
Automation will be implemented using Playwright (JavaScript).

Automation coverage includes:

• EMI formula validation
• Cross-browser execution
• Slider manipulation validation
• Excel file download validation
• PDF file download validation
• Data extraction and comparison with UI table

CI-ready test scripts will:

• Run headless
• Generate execution reports


**5. Test Environment**
Application URL:
https://emicalculator.net/

Browsers:

• Google Chrome
• Mozilla Firefox
• Safari
• Microsoft Edge

Devices:

• Desktop (Primary)
• Tablet
• Mobile (Responsive validation)

**6. Features to be Tested (for all type of loan)**

• Loan Amount	
• Interest Rate  
• Loan Tenure  
• EMI Output	
• Amortization Table	
• Charts	
• Excel Export	
• PDF Export	


**7. Acceptance Criteria**
The application will be considered acceptable when:

1.	EMI matches formula result within ±0.01 tolerance.
2.	Functionality  works as expected.
3.	Total Payment = Principal + Total Interest (exact match).
4.	Amortization table totals match chart values.
5.	Excel and PDF export contains identical data to UI table.
6.	No Severity-1 or Severity-2 defects remain open.
7.	Cross-browser execution shows consistent results.
8.	Automation suite passes 100%.

**8. Entry Criteria**
Testing will begin when:

• Requirements are finalized and approved
• Application build is deployed in test environment
• Test plan and test cases are approved
• Test environment is stable

**9. Exit Criteria**
Testing will conclude when:

• All critical and high-priority defects are resolved
• Regression testing is completed successfully
• Automation suite execution shows 100% pass
• Test Summary Report is generated
• Stakeholder sign-off is obtained

**10. Risks & Mitigation**

| Risk                               | Mitigation                     |
|-----------------------------------|--------------------------------|
| Rounding errors in calculations    | Use tolerance margin ±0.01     |
| Browser-specific rendering differences | Cross-browser automation    |
| Incorrect amortization logic       | Independent formula validation |
| Large input causing UI distortion  | Boundary testing               |


**11. Deliverables**

• Test Plan Document
• Test Cases
• Automation Scripts (Playwright)
• Defect Reports
• Test Execution Report
• Test Summary Report
