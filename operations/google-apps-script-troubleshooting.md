# Google Apps Script Troubleshooting

## Error: "Cannot read properties of undefined (reading 'range')"

### What This Means

This error occurs when you try to **run the function manually** instead of letting it be triggered by a form submission.

The `onFormSubmit` function requires an event object (`e`) that Google provides when a form is submitted. When you run it manually, there's no event object.

### Solution

**Do NOT run `onFormSubmit` manually.**

Instead:

1. **Set up the trigger correctly:**
   - Go to Apps Script editor
   - Click the **clock icon** (Triggers) in left sidebar
   - Click **"+ Add Trigger"**
   - Configure:
     - Function: `onFormSubmit`
     - Event source: `From spreadsheet`
     - Event type: `On form submit`
   - Click **"Save"**

2. **Test by submitting a form:**
   - Submit a form response
   - The script will run automatically
   - Check the execution log to see if it worked

### How to Test the Script

**Option 1: Submit a real form**
- Submit a test form response
- The script runs automatically
- Check CASE_REGISTER tab for new row

**Option 2: Check execution log**
- In Apps Script, click **"Executions"** (left sidebar)
- View recent runs
- Click on a run to see logs/errors

### Important Notes

- The script only runs when Google Forms are submitted
- It does NOT run when you manually add rows to the spreadsheet
- The script reads form responses and adds them to CASE_REGISTER automatically
- You cannot test it by clicking "Run" - it needs a form submission trigger

### If You Still Get Errors

1. **Check sheet names match exactly:**
   - CASE_REGISTER (the target sheet)
   - Your form response sheet names (must match exactly)

2. **Check form question titles:**
   - Case ID
   - Organisation Name
   - Primary Contact Email

3. **Check execution log:**
   - View → Logs (or click "Executions")
   - Look for specific error messages

4. **Verify trigger is set up:**
   - Click clock icon (Triggers)
   - Confirm `onFormSubmit` trigger exists
   - Status should be "Enabled"

