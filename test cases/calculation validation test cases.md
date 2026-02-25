# Calculation Test Cases

---

## TC-CALC-001

**Title:** Validate EMI calculation using formula  

**Steps:**  
1. Enter Loan Amount = 50,00,000.  
2. Enter Interest Rate = 8%.  
3. Enter Tenure = 20 years.  
4. Capture EMI displayed on UI.  
5. Recalculate EMI using formula in test logic.  

**Expected Result:**  
- UI EMI matches calculated EMI within ±0.01 tolerance.  

---

## TC-CALC-002

**Title:** Validate Total Payment calculation  

**Steps:**  
1. Capture Principal amount.  
2. Capture Total Interest.  
3. Capture Total Payment.  

**Expected Result:**  
- Total Payment = Principal + Total Interest.  

---

## TC-CALC-003

**Title:** Validate amortization cumulative interest  

**Steps:**  
1. Sum yearly interest values from amortization table.  
2. Compare with Total Interest displayed.  

**Expected Result:**  
- Cumulative interest equals displayed Total Interest.  

---

## TC-CALC-004

**Title:** Validate EMI recalculates correctly after sequential parameter updates  

**Steps:**  
1. Enter Loan Amount = 50,00,000  
2. Change Interest Rate multiple times  
3. Change Tenure  
4. Capture EMI after each update  
5. Recalculate using formula  

**Expected Result:**  
- EMI always matches formula result.  
- No stale or cached values used.  

---

## TC-CALC-005

**Title:** Validate final outstanding balance reaches zero  

**Steps:**  
1. Scroll to last row of amortization table.  
2. Observe final outstanding balance.  

**Expected Result:**  
- Final balance equals 0.  
- No negative residual balance.  