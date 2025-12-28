# How to Create the Operator Console Spreadsheet

## Option 1: Create in Google Sheets (Recommended)

1. **Create a new Google Sheet** named: `Intentia Assurance — Operator Console`

2. **Import CSV files:**
   - Go to `File` → `Import`
   - Upload each CSV file from the `operations/` folder
   - Import each as a new sheet
   - Name each sheet exactly as specified

3. **Add TAB 2 (OPS_DASHBOARD) manually:**
   - Create new sheet named `OPS_DASHBOARD`
   - Add section headers in Column A:
     - Row 1: `CASES REQUIRING ACTION`
     - Row 3: `WAITING ON FREEZE CONFIRMATION`
     - Row 5: `DELIVERY QUEUE`
     - Row 7: `RECENTLY DELIVERED`
   - Add FILTER/QUERY formulas to pull from CASE_REGISTER

4. **Add formulas to CASE_REGISTER:**
   - Column J (Days Since Intake): `=IF(D2<>"",TODAY()-D2,"")`
   - Column K (Days Since Freeze): `=IF(AND(F2="Y",D2<>""),TODAY()-D2,"")`

5. **Add data validation to CASE_REGISTER:**
   - Select Column E (Status)
   - `Data` → `Data validation`
   - Criteria: `List of items`
   - Enter: `Intake,Frozen,Delivered,Closed`

6. **Export as .xlsx:**
   - `File` → `Download` → `Microsoft Excel (.xlsx)`

## Option 2: Create in Excel

1. **Create new Excel workbook** named: `Intentia Assurance — Operator Console`

2. **Import CSV files:**
   - `Data` → `From Text/CSV`
   - Import each CSV file
   - Each becomes a new sheet

3. **Rename sheets** to match exact names:
   - CASE_REGISTER
   - OPS_DASHBOARD
   - PRESS_RULES
   - USE_CASE_BOUNDARIES
   - OPERATOR_PLAYBOOK
   - DAILY_OPERATOR_FLOW

4. **Add TAB 2 (OPS_DASHBOARD) manually** (see Option 1, step 3)

5. **Add formulas and data validation** (see Option 1, steps 4-5)

## Tab Order (Important)

Ensure tabs are in this exact order:
1. CASE_REGISTER
2. OPS_DASHBOARD
3. PRESS_RULES
4. USE_CASE_BOUNDARIES
5. OPERATOR_PLAYBOOK
6. DAILY_OPERATOR_FLOW

## Verification Checklist

- [ ] Exactly 6 tabs, no more, no less
- [ ] Tab names match exactly (case-sensitive)
- [ ] CASE_REGISTER has all 11 columns
- [ ] Formulas added to Days Since columns
- [ ] Status dropdown validation added
- [ ] OPS_DASHBOARD has section headers
- [ ] All text matches specification exactly
- [ ] No additional tabs, comments, or explanations

