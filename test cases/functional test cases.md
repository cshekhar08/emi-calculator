# Test Cases

---

## TC-FUNC-001

**Title:** Verify Loan Amount accepts manual numeric input  

**Steps:**  
1. Enter a valid numeric value in the Loan Amount field.  
2. Click outside the input field.  

**Expected Result:**  
- The value is accepted.  
- EMI recalculates dynamically.  
- No validation error is displayed.  

---

## TC-FUNC-002

**Title:** Verify Loan Amount updates via slider  

**Steps:**  
1. Drag the Loan Amount slider to different positions.  
2. Observe the Loan Amount input field.  

**Expected Result:**  
- The input field updates according to slider position.  
- EMI recalculates dynamically.  
- No UI lag or delay observed.  

---

## TC-FUNC-003

**Title:** Verify Interest Rate accepts manual numeric input  

**Steps:**  
1. Enter a valid positive integer or decimal value in the Interest Rate field.  
2. Click outside the input field.  

**Expected Result:**  
- The value is accepted.  
- EMI recalculates dynamically.  
- Total Interest updates accordingly.  

---

## TC-FUNC-004

**Title:** Verify Interest Rate updates via slider  

**Steps:**  
1. Adjust the Interest Rate using the slider.  
2. Observe the Interest Rate input field.  

**Expected Result:**  
- Input field reflects the slider value.  
- EMI updates immediately.  
- Total Interest recalculates correctly.  

---

## TC-FUNC-005

**Title:** Verify Loan Tenure toggle (Years ↔ Months)  

**Steps:**  
1. Enter a value in Years mode.  
2. Switch to Months mode.  
3. Switch back to Years mode.  

**Expected Result:**  
- Value converts accurately between Years and Months.  
- No data loss during conversion.  
- EMI recalculates correctly.  

---

## TC-FUNC-006

**Title:** Verify Loan Tenure accepts manual numeric input  

**Steps:**  
1. Enter a valid numeric value in the Loan Tenure field.  
2. Click outside the input field.  

**Expected Result:**  
- Value is accepted.  
- EMI recalculates dynamically.  
- Total Interest updates accordingly.  

---

## TC-FUNC-007

**Title:** Verify Loan Tenure updates via slider  

**Steps:**  
1. Adjust Loan Tenure using the slider.  
2. Observe the Loan Tenure input field.  

**Expected Result:**  
- Input field updates according to slider position.  
- EMI updates immediately.  
- Total Interest recalculates correctly.  

---

## TC-FUNC-008

**Title:** Verify EMI calculation updates in real-time  

**Steps:**  
1. Modify any one of the input parameters (Loan Amount, Interest Rate, or Tenure).  
2. Observe the EMI output.  

**Expected Result:**  
- EMI recalculates within 1 second.  
- Updated value reflects the new input accurately.  
- No UI freeze or calculation delay.  

---

## TC-FUNC-009

**Title:** Verify default values on initial page load  

**Expected Result:**  
- Default Loan Amount displayed  
- Default Interest Rate displayed  
- Default Tenure displayed  
- EMI calculated based on default values  