# Case Pipeline Setup Guide

## How to Create the CASE_PIPELINE Tab in Google Sheets

### Step 1: Create the Tab

1. Add new sheet, rename to: **`CASE_PIPELINE`**

### Step 2: Add Headers (Row 1)

1. Click **A1**, type: **`Intake`**
2. Click **C1**, type: **`Frozen`**
3. Click **E1**, type: **`Assembling`**
4. Click **G1**, type: **`Delivered`**
5. Click **I1**, type: **`Closed`**

**Format headers:**
- Select A1, C1, E1, G1, I1 (hold Ctrl to select multiple)
- **Format** → **Text** → **Bold**
- **Fill color**: Light grey (#EDEDED)
- **Align center**

### Step 3: Add Flow Arrows (Optional)

1. Click **B1**, type: **`→`**
2. Click **D1**, type: **`→`**
3. Click **F1**, type: **`→`**
4. Click **H1**, type: **`→`**

**Format arrows:**
- Select B1, D1, F1, H1
- **Format** → **Text** → **Bold**, size 16
- **Align center**

### Step 4: Add Formulas

**Intake Column (A2):**
1. Click **A2**
2. Type: **`=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F="N"))`**
3. Press **Enter**
4. Format column A background: **#EDEDED** (grey)

**Frozen Column (C2):**
1. Click **C2**
2. Type: **`=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Frozen")`**
3. Press **Enter**
4. Format column C background: **#FFF4CC** (amber)

**Assembling Column (E2):**
1. Click **E2**
2. Type: **`=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Frozen")*(CASE_REGISTER!G:G=""))`**
3. Press **Enter**
4. Format column E background: **#FFF4CC** (amber)

**Delivered Column (G2):**
1. Click **G2**
2. Type: **`=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Delivered")`**
3. Press **Enter**
4. Format column G background: **#D9F2D9** (green)

**Closed Column (I2):**
1. Click **I2**
2. Type: **`=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Closed")`**
3. Press **Enter**
4. Format column I background: **#E7E6E6** (darker grey)

### Step 5: Set Column Widths

- A: 30
- C: 30
- E: 30
- G: 30
- I: 30

---

## How to Create the CASE_STATUS_CHART Tab

### Step 1: Create the Tab

1. Add new sheet, rename to: **`CASE_STATUS_CHART`**

### Step 2: Add Data Table

**Row 1 - Headers:**
- A1: **`Status`**
- B1: **`Count`**

**Row 2:**
- A2: **`Intake`**
- B2: **`=COUNTIF(CASE_REGISTER!E:E,"Intake")`**

**Row 3:**
- A3: **`Frozen`**
- B3: **`=COUNTIF(CASE_REGISTER!E:E,"Frozen")`**

**Row 4:**
- A4: **`Delivered`**
- B4: **`=COUNTIF(CASE_REGISTER!E:E,"Delivered")`**

**Row 5:**
- A5: **`Closed`**
- B5: **`=COUNTIF(CASE_REGISTER!E:E,"Closed")`**

**Row 6:**
- A6: **`Total`**
- B6: **`=SUM(B2:B5)`**

### Step 3: Create Chart

1. Select **A1:B5** (Status and Count, excluding Total)
2. Go to **Insert** → **Chart**
3. Chart type: **Column chart**
4. Customize:
   - **Chart title**: "Cases by Status"
   - **Colors**: 
     - Intake: #EDEDED
     - Frozen: #FFF4CC
     - Delivered: #D9F2D9
     - Closed: #E7E6E6
   - Remove legend (optional)
   - Keep it simple

---

## Enhanced OPS_DASHBOARD - Summary Section

### Add Summary Row (Above existing sections):

**Row 1:**
- A1: **`Current Status Summary`**
- B1: **`=COUNTIF(CASE_REGISTER!E:E,"Intake")`**
- C1: **`In Intake`**
- D1: **`=COUNTIF(CASE_REGISTER!E:E,"Frozen")`**
- E1: **`Frozen`**
- F1: **`=COUNTIF(CASE_REGISTER!E:E,"Delivered")`**
- G1: **`Delivered`**

**Format:**
- A1: Bold
- B1, D1, F1: Bold, larger font, with background colors:
  - B1: #EDEDED (grey)
  - D1: #FFF4CC (amber)
  - F1: #D9F2D9 (green)
- C1, E1, G1: Labels (smaller font)

**Move existing sections down:**
- Current "CASES REQUIRING ACTION" moves to row 3
- Adjust all other sections down by 2 rows

---

## Visual Design Principles

- **Colors are informational, not emotional**
- **Pipeline shows current state, not urgency**
- **Charts show facts, not trends**
- **No blinking, flashing, or alerts**
- **Calm, factual, operational**

