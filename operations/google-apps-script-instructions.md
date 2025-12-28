# Google Apps Script - How to Install

## What This Script Does

This script automatically adds new rows to the **CASE_REGISTER** tab when form responses are submitted.

**Important:** This script works with Google Forms, not manual entries.

---

## Step-by-Step Installation

### STEP 1: Open Script Editor

1. Open your **Intentia Assurance — Operator Console** spreadsheet in Google Sheets
2. Go to **Extensions** → **Apps Script**
   - Or visit: https://script.google.com and select your project

### STEP 2: Paste the Code

1. Delete any existing code in the editor
2. Copy the entire script from `scripts/google-apps-script-case-register.gs`
3. Paste into the Apps Script editor
4. Click **Save** (Ctrl+S or the disk icon)
5. Name your project: **"Intentia Assurance Case Register Automation"**

### STEP 3: Set Up the Trigger

1. Click the **clock icon** (Triggers) in the left sidebar
2. Click **"+ Add Trigger"** button (bottom right)
3. Configure:
   - **Function to run:** `onFormSubmit`
   - **Event source:** `From spreadsheet`
   - **Event type:** `On form submit`
   - **Failure notification settings:** Choose how often to get notified (e.g., "Daily")
4. Click **"Save"**

### STEP 4: Authorize the Script

1. You'll see an authorization dialog
2. Click **"Review Permissions"**
3. Choose your Google account
4. Click **"Advanced"**
5. Click **"Go to [Your Project Name] (unsafe)"**
   - This warning is normal for Apps Script
6. Click **"Allow"**

---

## Important Configuration

### Sheet Names Must Match Exactly

The script looks for these exact sheet names:

- **Case Register:** `CASE_REGISTER` (exact match)
- **PDR Form Responses:** `Intentia Assurance — Programme Decision Record Intake (Responses)`
- **Training Form Responses:** `Training Assurance Intake Form (Responses)`

### Form Column Names Must Match

Your Google Forms must have these exact question titles:

- **Case ID**
- **Organisation Name**
- **Primary Contact Email**

---

## Testing

1. Submit a test form response
2. Go back to your spreadsheet
3. Check the **CASE_REGISTER** tab
4. A new row should appear automatically
5. Check execution log:
   - In Apps Script editor, click **"Executions"** (left sidebar)
   - View recent runs to see if there are any errors

---

## Troubleshooting

**Script doesn't run:**
- Check that the trigger is set up correctly
- Verify sheet names match exactly (including spaces and special characters)
- Check execution log for error messages

**Values aren't appearing:**
- Verify form question titles match exactly: `Case ID`, `Organisation Name`, `Primary Contact Email`
- Check that the CASE_REGISTER sheet exists
- View execution log for specific errors

**Permission errors:**
- Re-authorize the script if permissions were denied
- Make sure you're using the same Google account for the script and spreadsheet

---

## Notes

- This script only runs when Google Forms are submitted
- It does NOT run for manual entries in the spreadsheet
- The script reads form responses and adds them to CASE_REGISTER automatically
- Colors are applied automatically based on status

