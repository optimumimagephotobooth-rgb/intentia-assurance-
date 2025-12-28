# Operator Console - Automated Setup Script

## What This Does

This script **automatically creates all 8 tabs** with:
- Headers and formatting
- Formulas (FILTER, COUNTIF, date calculations)
- Data validation (Status dropdown)
- Colors and styling
- Proper tab order

**Run this ONCE** to set up the entire console.

---

## How to Use

### Step 1: Open Apps Script

1. Open your **Intentia Assurance — Operator Console** spreadsheet
2. Go to **Extensions** → **Apps Script**

### Step 2: Paste the Setup Script

1. Delete any existing code
2. Copy the entire script from `operations/google-apps-script-setup-console.gs`
3. Paste into Apps Script editor
4. Click **Save** (Ctrl+S)
5. Name the project: **"Operator Console Setup"**

### Step 3: Run the Setup

1. In the function dropdown at the top, select: **`setupOperatorConsole`**
2. Click the **Run** button (▶️)
3. If prompted, click **"Review Permissions"**
4. Choose your Google account
5. Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
6. Click **"Allow"**

### Step 4: Wait for Completion

- The script will create all 8 tabs
- It will format everything automatically
- You'll see "Operator Console setup complete!" in the log

### Step 5: Create Chart (Manual Step)

The chart in CASE_STATUS_CHART needs to be created manually:

1. Go to **CASE_STATUS_CHART** tab
2. Select **A1:B5** (Status and Count columns)
3. Go to **Insert** → **Chart**
4. Choose **Column chart**
5. Customize colors:
   - Intake: #EDEDED
   - Frozen: #FFF4CC
   - Delivered: #D9F2D9
   - Closed: #E7E6E6

---

## What Gets Created

✅ **CASE_REGISTER** - Full structure with formulas and validation
✅ **OPS_DASHBOARD** - All FILTER formulas and summary counts
✅ **CASE_PIPELINE** - Visual flow with colors
✅ **CASE_STATUS_CHART** - Data table (chart created manually)
✅ **PRESS_RULES** - All 10 rules
✅ **USE_CASE_BOUNDARIES** - All 3 use cases
✅ **OPERATOR_PLAYBOOK** - All 4 situations
✅ **DAILY_OPERATOR_FLOW** - All 6 steps
✅ **Tab order** - Correct sequence

---

## Important Notes

- **Run this script ONCE** - it's for initial setup
- If you run it again, it will **overwrite** existing tabs
- The chart must be created manually (one-time)
- After setup, use the form submission script for ongoing automation

---

## After Setup

1. Create the chart manually (see Step 5 above)
2. Test by adding a row to CASE_REGISTER manually
3. Verify formulas work correctly
4. Set up the form submission trigger (separate script)

---

## Troubleshooting

**If script fails:**
- Check execution log (View → Logs)
- Make sure you authorized permissions
- Ensure spreadsheet is not locked/protected

**If tabs already exist:**
- Script will overwrite them
- Make sure you want to do this before running

**If formulas don't work:**
- Check that CASE_REGISTER sheet exists first
- Verify sheet names match exactly

