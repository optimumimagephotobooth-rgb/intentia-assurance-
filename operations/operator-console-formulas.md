# Operator Console - Formulas and Automation

## TAB 1: CASE_REGISTER

### Column J (Days Since Intake) - Row 2 and below:

```
=IF(D2<>"",TODAY()-D2,"")
```

**What it does:** Calculates days since intake date. Shows blank if no date entered.

**Apply to:** Column J, starting from row 2 (drag down for all rows)

---

### Column K (Days Since Freeze) - Row 2 and below:

```
=IF(AND(F2="Y",D2<>""),TODAY()-D2,"")
```

**What it does:** Calculates days since intake only if Freeze Confirmed = "Y". Shows blank otherwise.

**Apply to:** Column K, starting from row 2 (drag down for all rows)

---

## TAB 2: OPS_DASHBOARD

### CASES REQUIRING ACTION (Below row 1):

**Option 1 - Using FILTER (Google Sheets):**

```
=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Intake")
```

**What it does:** Shows all rows from CASE_REGISTER where Status = "Intake"

**Place in:** Row 2, Column A

---

### WAITING ON FREEZE CONFIRMATION (Below row 3):

```
=FILTER(CASE_REGISTER!A:J, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F<>"Y"))
```

**What it does:** Shows Intake cases where Freeze Confirmed is NOT "Y"

**Place in:** Row 4, Column A

---

### DELIVERY QUEUE (Below row 5):

```
=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Frozen")
```

**What it does:** Shows all rows where Status = "Frozen" (ready to assemble PDF)

**Place in:** Row 6, Column A

---

### RECENTLY DELIVERED (Below row 7):

```
=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Delivered")
```

**What it does:** Shows all rows where Status = "Delivered"

**Place in:** Row 8, Column A

---

## Alternative: Using QUERY (More flexible)

If FILTER doesn't work or you need more control:

### CASES REQUIRING ACTION:

```
=QUERY(CASE_REGISTER!A:J, "SELECT * WHERE E='Intake'", 1)
```

### WAITING ON FREEZE CONFIRMATION:

```
=QUERY(CASE_REGISTER!A:J, "SELECT * WHERE E='Intake' AND F<>'Y'", 1)
```

### DELIVERY QUEUE:

```
=QUERY(CASE_REGISTER!A:J, "SELECT * WHERE E='Frozen'", 1)
```

### RECENTLY DELIVERED:

```
=QUERY(CASE_REGISTER!A:J, "SELECT * WHERE E='Delivered'", 1)
```

**Note:** The last parameter `1` means "include headers". Use `0` to exclude headers.

---

## Excel Alternative (Using Excel formulas)

If using Excel instead of Google Sheets:

### CASES REQUIRING ACTION:

Excel doesn't have FILTER function in older versions. Use this array formula (Ctrl+Shift+Enter):

```
=IFERROR(INDEX(CASE_REGISTER!A:J,SMALL(IF(CASE_REGISTER!E:E="Intake",ROW(CASE_REGISTER!E:E)),ROW(A1)),COLUMN(A1)),"")
```

**Or use:** Excel 365/2021 has FILTER function, so same as Google Sheets.

---

## Important Notes

1. **Formula ranges:** Adjust `CASE_REGISTER!A:J` if you need more columns (e.g., A:K to include Days Since Freeze)

2. **Sheet name must match exactly:** Formula references `CASE_REGISTER` - ensure sheet name matches exactly (case-sensitive)

3. **Header row:** OPS_DASHBOARD formulas pull data starting from row 2 (skipping headers). Adjust if needed.

4. **No automatic Status changes:** These formulas only display data. They never change Status automatically.

5. **Read-only intent:** OPS_DASHBOARD shows "what needs to be done next" but doesn't make decisions.

---

## Quick Setup Steps

1. **CASE_REGISTER formulas:**
   - Click cell J2
   - Enter: `=IF(D2<>"",TODAY()-D2,"")`
   - Press Enter
   - Copy cell J2
   - Select J2:J1000 (or however many rows you need)
   - Paste
   - Repeat for Column K with the Days Since Freeze formula

2. **OPS_DASHBOARD formulas:**
   - Click cell A2 (below "CASES REQUIRING ACTION")
   - Enter the FILTER formula
   - Press Enter
   - Repeat for each section (rows 4, 6, 8)

