# Boundary Test Cases

---

## TC-BOUND-001

**Title:** Verify minimum Loan Amount value (0)  

**Steps:**  
1. Enter Loan Amount = 0.  
2. Observe EMI and related calculations.  

**Expected Result:**  
- EMI displays 0.  
- Total Interest displays 0.  
- No system crash or UI distortion.  

---

## TC-BOUND-002

**Title:** Verify maximum Loan Amount value (200 Lakhs)  

**Steps:**  
1. Enter Loan Amount = 200 Lakhs (maximum allowed).  
2. Observe EMI and related outputs.  

**Expected Result:**  
- EMI calculated correctly.  
- Charts and amortization table load without performance issue.  
- No UI overflow.  

---

## TC-BOUND-003

**Title:** Verify minimum Interest Rate (5%)  

**Steps:**  
1. Enter or use slider to set Interest Rate at 5%.  
2. Observe EMI calculation.  

**Expected Result:**  
- EMI calculated correctly.  
- Total Interest reflects minimum rate logic.  

---

## TC-BOUND-004

**Title:** Verify maximum Interest Rate (20%)  

**Steps:**  
1. Enter or use slider to set Interest Rate at 20%.  
2. Observe EMI calculation.  

**Expected Result:**  
- EMI calculated correctly.  
- No calculation overflow or negative values.  

---

## TC-BOUND-005

**Title:** Verify maximum Loan Tenure (30 years)  

**Steps:**  
1. Enter Loan Tenure = 30 years.  
2. Observe amortization table.  

**Expected Result:**  
- EMI calculated correctly.  
- Amortization table displays full tenure correctly.  
- Chart renders properly.  