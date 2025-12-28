# Operator Console - Visual Enhancements

**Pipeline Flow & Charts for Case Stages**

---

## NEW TAB: CASE_PIPELINE

### Purpose
Visual flow showing cases at each stage. Factual only - no interpretation.

### Structure

**Column Layout:**
- Column A: **Intake** (Status = "Intake", Freeze = "N")
- Column C: **Frozen** (Status = "Frozen")
- Column E: **Assembling** (Status = "Frozen", PDF not sent)
- Column G: **Delivered** (Status = "Delivered")
- Column I: **Closed** (Status = "Closed")

**Colors (matches existing system):**
- Intake: #EDEDED (grey)
- Frozen: #FFF4CC (amber)
- Assembling: #FFF4CC (amber) - same as Frozen
- Delivered: #D9F2D9 (green)
- Closed: #E7E6E6 (darker grey)

### Row 1 Headers (Centered, Bold):

A1: **Intake**
C1: **Frozen**
E1: **Assembling**
G1: **Delivered**
I1: **Closed**

### Formulas to Pull Cases:

**Intake (Column A, starting A2):**
```
=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F="N"))
```

**Frozen (Column C, starting C2):**
```
=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Frozen")
```

**Delivered (Column G, starting G2):**
```
=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Delivered")
```

**Closed (Column I, starting I2):**
```
=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Closed")
```

**Assembling (Column E, starting E2):**
```
=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Frozen")*(CASE_REGISTER!G:G=""))
```

### Visual Flow Indicators:

Add arrows between columns (B, D, F, H) using text: **→**

---

## NEW TAB: CASE_STATUS_CHART

### Purpose
Simple chart showing case counts by status.

### Data Table (Rows 1-6):

**Row 1 Headers:**
- A1: **Status**
- B1: **Count**

**Row 2:**
- A2: **Intake**
- B2: **`=COUNTIF(CASE_REGISTER!E:E,"Intake")`**

**Row 3:**
- A3: **Frozen**
- B3: **`=COUNTIF(CASE_REGISTER!E:E,"Frozen")`**

**Row 4:**
- A4: **Delivered**
- B4: **`=COUNTIF(CASE_REGISTER!E:E,"Delivered")`**

**Row 5:**
- A5: **Closed**
- B5: **`=COUNTIF(CASE_REGISTER!E:E,"Closed")`**

**Row 6:**
- A6: **Total**
- B6: **`=SUM(B2:B5)`**

### Create Chart:

1. Select A1:B5 (Status and Count)
2. **Insert** → **Chart**
3. Chart type: **Column chart** or **Bar chart**
4. Customize:
   - Colors match status colors:
     - Intake: #EDEDED (grey)
     - Frozen: #FFF4CC (amber)
     - Delivered: #D9F2D9 (green)
     - Closed: #E7E6E6 (darker grey)
   - Title: **"Cases by Status"**
   - Remove legend (optional)
   - Keep it simple and factual

---

## ENHANCED OPS_DASHBOARD

Add a summary section at the top:

**Row 1:**
- A1: **Current Status Summary**
- B1: **`=COUNTIF(CASE_REGISTER!E:E,"Intake")`** → Label: "In Intake"
- D1: **`=COUNTIF(CASE_REGISTER!E:E,"Frozen")`** → Label: "Frozen"
- F1: **`=COUNTIF(CASE_REGISTER!E:E,"Delivered")`** → Label: "Delivered"

Format cells with matching colors:
- B1 background: #EDEDED (grey)
- D1 background: #FFF4CC (amber)
- F1 background: #D9F2D9 (green)

---

## Color Reference Table

| Status | Color | Hex Code | Use |
|--------|-------|----------|-----|
| Intake | Grey | #EDEDED | Cases in intake stage |
| Frozen | Amber | #FFF4CC | Cases frozen, ready for assembly |
| Delivered | Green | #D9F2D9 | Cases delivered to client |
| Closed | Dark Grey | #E7E6E6 | Cases closed/archived |

---

## Implementation Notes

1. **All visualizations are read-only** - they show data, never change it
2. **Colors match existing system** - consistent with CASE_REGISTER row colors
3. **Formulas only** - no manual updates required
4. **Factual display only** - no interpretation or suggestions
5. **Pipeline shows flow** - helps operator see what stage cases are at

---

## Updated Tab Order (8 tabs total):

1. CASE_REGISTER
2. OPS_DASHBOARD
3. CASE_PIPELINE (NEW)
4. CASE_STATUS_CHART (NEW)
5. PRESS_RULES
6. USE_CASE_BOUNDARIES
7. OPERATOR_PLAYBOOK
8. DAILY_OPERATOR_FLOW

---

## Rules for Visual Elements

- Colors are informational only
- Charts show counts, not trends or predictions
- Pipeline shows current state, not velocity
- No "urgent" indicators or deadlines
- No automated alerts or suggestions
- Visual aids support calm operation, not urgency

