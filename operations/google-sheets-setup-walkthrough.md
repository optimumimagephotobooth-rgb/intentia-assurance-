# Google Sheets Setup - Step-by-Step Walkthrough

## STEP 1: Create the Spreadsheet

1. Go to **https://sheets.google.com**
2. Click **"Blank"** (or the plus icon)
3. Click on the spreadsheet name at the top (it will say "Untitled spreadsheet")
4. Rename it to: **`Intentia Assurance — Operator Console`**
5. Right-click the "Sheet1" tab at the bottom → **Rename** → Type: **`CASE_REGISTER`**

---

## STEP 2: Set Up CASE_REGISTER Tab

### Add Column Headers:

1. You should already be on the CASE_REGISTER tab
2. Click cell **A1**
3. Type the first header: **`Case ID`**
4. Press **Tab** to move to B1
5. Continue typing headers in this exact order:

   - B1: **`Client / Organisation`**
   - C1: **`Use Case`**
   - D1: **`Intake Date`**
   - E1: **`Status`**
   - F1: **`Freeze Confirmed (Y/N)`**
   - G1: **`Final PDF Sent Date`**
   - H1: **`Operator Notes (Private)`**
   - I1: **`Operator Guidance (System)`**
   - J1: **`Days Since Intake`**
   - K1: **`Days Since Freeze`**

### Add Formula for Column J (Days Since Intake):

1. Click cell **J2**
2. Type this formula: **`=IF(D2<>"",TODAY()-D2,"")`**
3. Press **Enter**
4. Click cell **J2** again
5. Copy it (Ctrl+C)
6. Select cells **J2:J1000** (or as many rows as you need)
7. Paste (Ctrl+V)

### Add Formula for Column K (Days Since Freeze):

1. Click cell **K2**
2. Type this formula: **`=IF(AND(F2="Y",D2<>""),TODAY()-D2,"")`**
3. Press **Enter**
4. Click cell **K2** again
5. Copy it (Ctrl+C)
6. Select cells **K2:K1000** (or as many rows as you need)
7. Paste (Ctrl+V)

### Add Data Validation for Status (Column E):

1. Click column **E** header (the "E" at the top) to select the entire column
2. Go to **Data** → **Data validation**
3. Under "Criteria":
   - Select: **"List of items"**
   - In the box below, type: **`Intake,Frozen,Delivered,Closed`**
4. Check: **"Show dropdown list in cell"**
5. Click **"Save"**

---

## STEP 3: Import Tab 3 - PRESS_RULES

### Option A: Copy-Paste (Easiest)

1. At the bottom, click the **"+"** icon to add a new sheet
2. Right-click the new sheet tab → **Rename** → **`PRESS_RULES`**
3. Click cell **A1**
4. Copy and paste this text (one rule per cell):

```
Press Rules
The press sequence is fixed: Intake → Freeze → Output.
Thinking is permitted only during Intake.
Once Freeze is confirmed, no edits are permitted.
Corrections require a new record.
The PDF is the authoritative artefact.
Sheets, forms, and emails are not records.
We record intent and scope, not outcomes.
We do not assess effectiveness, competence, or impact.
Automation must not create or modify meaning.
If unsure, stop and do not proceed.
```

5. Paste into column A (one rule per row, starting from A1)

### Option B: Import CSV

1. Go to **File** → **Import**
2. Click **"Upload"**
3. Select file: `operator-console-tab3-press-rules.csv`
4. Import location: **"Insert new sheet(s)"**
5. Click **"Import data"**
6. Rename the sheet to **`PRESS_RULES`**

---

## STEP 4: Import Tab 4 - USE_CASE_BOUNDARIES

1. Click **"+"** to add new sheet
2. Rename to: **`USE_CASE_BOUNDARIES`**
3. In row 1, add headers:

   - A1: **`Use Case`**
   - B1: **`What This Includes`**
   - C1: **`What This Explicitly Excludes`**
   - D1: **`Immediate Refusal Triggers`**

4. Add data rows:

**Row 2:**
- A2: **`Training Assurance`**
- B2: **`Intent as stated, scope, delivery facts`**
- C2: **`Outcomes, effectiveness, competence, evaluation`**
- D2: **`Asked "Did it work?" or "What impact did this have?"`**

**Row 3:**
- A3: **`Programme Decision Record`**
- B3: **`Decision context at time made`**
- C3: **`Judgement, hindsight, approval or rejection`**
- D3: **`Asked "Was this the right decision?"`**

**Row 4:**
- A4: **`Strategic Intent / Evidence Pack`**
- B4: **`Declared intent and exclusions`**
- C4: **`Performance guarantees, accountability transfer`**
- D4: **`Asked to certify success or readiness`**

---

## STEP 5: Import Tab 5 - OPERATOR_PLAYBOOK

1. Add new sheet, rename to: **`OPERATOR_PLAYBOOK`**
2. Add headers in row 1:

   - A1: **`Situation`**
   - B1: **`What To Say (Verbatim)`**
   - C1: **`What NOT To Say`**

3. Add data rows:

**Row 2:**
- A2: **`Client asks for opinion`**
- B2: **`We do not assess or advise.`**
- C2: **`Any opinion or explanation`**

**Row 3:**
- A3: **`Client asks to edit after freeze`**
- B3: **`That would require a new record.`**
- C3: **`I'll just fix it.`**

**Row 4:**
- A4: **`Client asks if programme worked`**
- B4: **`This record does not assess outcomes.`**
- C4: **`Any interpretation`**

**Row 5:**
- A5: **`Client pressures for speed`**
- B5: **`The sequence protects the record.`**
- C5: **`Apologies or justifications`**

---

## STEP 6: Import Tab 6 - DAILY_OPERATOR_FLOW

1. Add new sheet, rename to: **`DAILY_OPERATOR_FLOW`**
2. Add headers in row 1:

   - A1: **`Step Order`**
   - B1: **`Action`**
   - C1: **`Reminder`**

3. Add data rows:

**Row 2:** 1 | Open Ops Dashboard | Do not open documents yet
**Row 3:** 2 | Review Intake cases | Thinking allowed only here
**Row 4:** 3 | Chase freeze confirmations | No assembly before freeze
**Row 5:** 4 | Assemble ONE PDF | No multitasking
**Row 6:** 5 | Hash and archive | Mechanical step only
**Row 7:** 6 | Update Case Register | Status update comes last

---

## STEP 7: Create Tab 2 - OPS_DASHBOARD (Most Important)

1. Add new sheet, rename to: **`OPS_DASHBOARD`**
2. Add section headers in Column A:

   - A1: **`CASES REQUIRING ACTION`**
   - A2: (leave empty)
   - A3: **`WAITING ON FREEZE CONFIRMATION`**
   - A4: (leave empty)
   - A5: **`DELIVERY QUEUE`**
   - A6: (leave empty)
   - A7: **`RECENTLY DELIVERED`**

### Add Formulas:

**CASES REQUIRING ACTION** (cell A2):
1. Click cell **A2**
2. Type: **`=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Intake")`**
3. Press **Enter**

**WAITING ON FREEZE CONFIRMATION** (cell A4):
1. Click cell **A4**
2. Type: **`=FILTER(CASE_REGISTER!A:J, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F<>"Y"))`**
3. Press **Enter**

**DELIVERY QUEUE** (cell A6):
1. Click cell **A6**
2. Type: **`=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Frozen")`**
3. Press **Enter**

**RECENTLY DELIVERED** (cell A8):
1. Click cell **A8**
2. Type: **`=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Delivered")`**
3. Press **Enter**

---

## STEP 8: Reorder Tabs

1. Drag tabs to this exact order:
   1. CASE_REGISTER
   2. OPS_DASHBOARD
   3. PRESS_RULES
   4. USE_CASE_BOUNDARIES
   5. OPERATOR_PLAYBOOK
   6. DAILY_OPERATOR_FLOW

---

## STEP 9: Format Headers (Optional but Recommended)

### For CASE_REGISTER headers:

1. Select row 1 (click the "1" on the left)
2. Click **Format** → **Text** → **Bold**
3. Click **Fill color** → Choose a light blue or gray

### Repeat for other tabs with headers

---

## STEP 10: Test It

1. Go to **CASE_REGISTER** tab
2. Add a test row:
   - A2: **`TEST-001`**
   - B2: **`Test Organisation`**
   - C2: **`Training Assurance`**
   - D2: **`12/26/2025`** (or today's date)
   - E2: Select **`Intake`** from dropdown
   - F2: **`N`**
3. Check **J2** - should show "0" (days since intake)
4. Go to **OPS_DASHBOARD** tab
5. Check **A2** - should show your test row

---

## STEP 11: Export as Excel

1. Go to **File** → **Download** → **Microsoft Excel (.xlsx)**
2. The file will download to your computer
3. Name it: **`Intentia Assurance — Operator Console.xlsx`**

---

## ✅ Done!

Your Operator Console spreadsheet is ready to use.

