# Google Apps Script Setup Instructions

## Code Location

**File:** `scripts/google-apps-script-case-register.gs`

## How to Set Up

1. **Open your Google Sheet** that contains the Case Register and form response sheets

2. **Open the Script Editor:**
   - Go to `Extensions` → `Apps Script`
   - Or visit: https://script.google.com

3. **Paste the code** from `google-apps-script-case-register.gs`

4. **Save the project** (Ctrl+S or Cmd+S)

5. **Set up the trigger:**
   - Click on the clock icon (Triggers) in the left sidebar
   - Click `+ Add Trigger` (bottom right)
   - Configure:
     - **Function to run:** `onFormSubmit`
     - **Event source:** `From spreadsheet`
     - **Event type:** `On form submit`
   - Click `Save`

6. **Authorize the script:**
   - When you first run it, Google will ask for permissions
   - Click `Review Permissions`
   - Choose your Google account
   - Click `Advanced` → `Go to [Your Project Name] (unsafe)`
   - Click `Allow`

## Important Notes

### Sheet Names Must Match Exactly

The script looks for these exact sheet names:

- **Case Register:** `Case Register`
- **PDR Responses:** `Intentia Assurance — Programme Decision Record Intake (Responses)`
- **Training Responses:** `Training Assurance Intake Form (Responses)`

### Form Column Names Must Match

The script looks for these exact column headers in your forms:

- `Case ID`
- `Organisation Name`
- `Primary Contact Email`

**Important:** Make sure your Google Form questions match these names exactly.

### Testing

1. Submit a test form response
2. Check the Case Register sheet
3. View execution log: `Executions` in Apps Script editor
4. Check for errors: `View` → `Logs` (or `Ctrl+Enter`)

## Troubleshooting

**If the script doesn't run:**
- Check that the trigger is set up correctly
- Verify sheet names match exactly (including spaces and special characters)
- Check that form column names match exactly
- View execution log for error messages

**If values aren't appearing:**
- Check that the form questions have the exact names listed above
- Verify the Case Register sheet exists and has the correct structure
- Check execution log for specific errors

## Security Note

This script only runs on your spreadsheet. It does not access external data or send information outside Google Sheets.


