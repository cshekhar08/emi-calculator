# Negative Test Cases

---

## TC-NEG-001

**Title:** Verify alphabetic input in Loan Amount field  

**Steps:**  
1. Enter alphabets (e.g., "abcd") in Loan Amount field.  
2. Click outside field.  

**Expected Result:**  
- Input is rejected and value set to 0 (if input contains integer with alphabets then value is sanitized and integer value remains in input field).  
- EMI not recalculated (show 0 for all calculation).  
- No application crash.  

---

## TC-NEG-002

**Title:** Verify special characters in Interest Rate field  

**Steps:**  
1. Enter special characters (e.g., "@#$%") in Interest Rate field.  

**Expected Result:**  
- Input is not accepted.  
- Proper validation handling occurs.  
- EMI remains unchanged.  

---

## TC-NEG-003

**Title:** Verify empty input field behavior  

**Steps:**  
1. Clear Loan Amount field completely.  
2. Click outside field.  

**Expected Result:**  
- Default value restored OR validation triggered.  
- No calculation error displayed.  

---

## TC-NEG-004

**Title:** Verify negative value input fields behavior  

**Steps:**  
1. Enter Negative value (e.g., -5 in Interest Rate) in different input fields.  

**Expected Result:**  
- Negative value is sanitized and automatically converted to positive value.  