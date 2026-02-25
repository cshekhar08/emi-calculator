# Cross-Browser Test Cases

---

## TC-BR-001

**Title:** Verify EMI calculation consistency across supported browsers  
**Browsers:** Chrome, Firefox, Edge, Safari  

**Steps:**  
1. Open application in browser.  
2. Enter Loan Amount = 50,00,000.  
3. Enter Interest Rate = 8%.  
4. Enter Tenure = 20 years.  
5. Capture EMI value.  

**Expected Result:**  
- EMI value is identical across all supported browsers.  
- No calculation discrepancy observed.  

---

## TC-BR-002

**Title:** Verify slider functionality across browsers  

**Steps:**  
1. Adjust Loan Amount slider.  
2. Adjust Interest Rate slider.  
3. Adjust Tenure slider.  

**Expected Result:**  
- Sliders move smoothly.  
- Input fields update correctly.  
- EMI recalculates immediately.  
- No UI lag or broken interaction.  

---

## TC-BR-003

**Title:** Verify chart rendering consistency across browsers  

**Steps:**  
1. Modify loan parameters.  
2. Observe Pie and Bar charts.  

**Expected Result:**  
- Charts render properly.  
- No distortion or missing data.  
- Values match amortization table.  

---

## TC-BR-004

**Title:** Verify file download across browsers  

**Steps:**  
1. Click “Download Excel” or “Download PDF”.  
2. Observe download behavior.  

**Expected Result:**  
- File downloads successfully in each browser.  
- No browser security warning blocks download.  
- File content matches UI table.  

---

## TC-BR-005

**Title:** Verify absence of console errors across browsers  

**Steps:**  
1. Open Developer Console.  
2. Perform multiple parameter changes.  

**Expected Result:**  
- No JavaScript errors logged.  
- No failed network requests.  