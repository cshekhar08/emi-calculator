>## Test automation and QA artifacts for EMI Calculator financial web application

## Overview
This repository contains the complete **QA test automation framework and supporting test artifacts** for validating the **EMI Calculator Financial Web Application**  
https://emicalculator.net/

The framework focuses on ensuring:
- Accuracy of EMI calculations
- Consistency across UI, charts, tables, and reports
- Reliability expected from a financial application
- Stable regression coverage through automation and CI/CD

---

## Technology Stack
- **Automation Framework:** Playwright 
- **Programming Language:** JavaScript 
- **Design Pattern:** Page Object Model (POM)
- **CI/CD:** GitHub Actions
- **Reporting:** Playwright HTML Reports

---

## Repository Structure
EMI-CALCULATOR  
│  
├── .github/workflows  
│ └── main.yml # CI/CD pipeline configuration  
│  
├── automation  
│ ├── pages  
│ │ └── EMIHomePage.js # Page Object Model for EMI Calculator  
│ │  
│ ├── tests  
│ │ ├── EMIValidation.spec.js  
│ │ ├── sliderValidation.spec.js  
│ │ ├── chartTableDataValidation.spec.js  
│ │ └── downloadExcel.spec.js  
│ │  
│ ├── utils  
│ │ └── EMIFormula.js # Independent EMI calculation logic  
│ │  
│ ├── playwright.config.js  
│ ├── package.json  
│ └── package-lock.json  
│  
├── test cases # Manual test cases  
│ ├── functional test cases.md  
│ ├── calculation validation test cases.md  
│ ├── boundary value test cases.md  
│ ├── negative test cases.md  
│ ├── chart & table validation test cases.md  
│ ├── file download test cases.md  
│ ├── cross-browser test cases.md  
│ └── cross-device test cases.md  
│  
├── test plan  
│ └── EMI_Calculator_Test_Plan.md  
│  
├── bug-reports  
│ └── loanTenureBug.md  
├── regressionSuitDesign.md  
├── testSummaryReport.md  
├── README.md  
└── LICENSE  

---

## Automation Architecture

### Design Approach
The framework follows the **Page Object Model (POM)** to:
- Separate UI interactions from test validations
- Improve readability and maintainability
- Reduce duplication across test cases

### Layered Structure
- **Pages Layer:** Contains locators and reusable UI actions  
- **Tests Layer:** Contains validation logic and assertions  
- **Utils Layer:** Contains independent EMI formula logic for calculation validation  

EMI values shown on the UI are validated using independently calculated values instead of hard-coded data.

---

## Regression Strategy

The regression suite is designed using a **risk-based, automation-first approach**, focusing on business-critical functionality.

### Regression Coverage
- EMI calculation accuracy using standard EMI formula
- Total Interest and Total Payment validation
- Slider and manual input consistency
- Year-wise amortization table validation
- Chart and table data synchronization
- Excel file download and data validation
- Boundary value and common real-world loan scenarios

### Regression Execution
- **Smoke Regression:** Core EMI calculation scenarios
- **Full Regression:** Triggered on changes to calculation logic, UI, or reporting
- All regression tests are automated using Playwright

Any production defect is added to the regression suite to prevent recurrence.

---

## CI/CD Integration

- CI/CD is implemented using **GitHub Actions**
- Workflow configuration is available in `.github/workflows/main.yml`
- Automated tests run:
  - On every code push
  - On every pull request
- Tests execute in headless mode
- Pipeline fails automatically if any critical regression test fails

---

## Test Execution Steps

### Prerequisites
- Node.js (v16 or later)
- npm

### Install Dependencies
```bash
npm install
```
### Run All Tests
```bash
npx playwright test
```

### Run Tests in Headed Mode
```bash
npx playwright test --headed
```

### Run a Specific Test File
```bash
npx playwright test EMIValidation.spec.js
```

### View Test Report
```bash
npx playwright show-report
```