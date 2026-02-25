# Cross-Device Test Cases

---

## TC-DEV-001

**Title:** Verify responsive layout on mobile viewport  
**Device:** Mobile (e.g., 375px width)  

**Steps:**  
1. Open application in mobile viewport.  
2. Observe layout of input fields, sliders, EMI section, charts, and table.  

**Expected Result:**  
- No overlapping or clipped elements.  
- All input fields and buttons are visible.  
- Charts resize proportionally.  
- No horizontal scroll for layout.  

---

## TC-DEV-002

**Title:** Verify slider usability on touch devices  

**Steps:**  
1. Adjust Loan Amount slider using touch interaction.  
2. Adjust Interest Rate and Tenure sliders.  

**Expected Result:**  
- Slider responds smoothly to touch gestures.  
- Input field updates accurately.  
- EMI recalculates immediately.  
- No jitter or unintended value jumps.  

---

## TC-DEV-003

**Title:** Verify amortization table usability on mobile  

**Steps:**  
1. Open amortization table on mobile viewport.  
2. Verify no scrolling is present and only 4 columns are displayed.  

**Expected Result:**  
- Defined columns are displayed correctly.  
- Total Payment and Loan Paid to Date column are not displayed in small screen devices.  
- Data remains readable and aligned.  

---

## TC-DEV-004

**Title:** Verify chart readability on small screens  

**Steps:**  
1. Modify loan parameters.  
2. Observe Pie on mobile view.  

**Expected Result:**  
- Chart renders clearly.  
- Labels are readable.  
- No distortion or overlapping values.  

**Note:** Bar chart is hidden in small screen devices.  

---

## TC-DEV-005

**Title:** Verify keyboard appears for input fields on mobile  

**Steps:**  
1. Tap Loan Amount field on mobile device.  
2. Provide valid numeric value.  

**Expected Result:**  
- Keypad appears.  
- User is able to enter value without any issue.  