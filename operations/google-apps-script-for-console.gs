/**
 * INTENTIA ASSURANCE
 * Central Case Register Automation
 * Trigger: From spreadsheet → On form submit
 * Scope: Internal operations only
 */

function onFormSubmit(e) {
  try {
    // ===== CONFIG =====
    const REGISTER_SHEET_NAME = "CASE_REGISTER";

    // Intake response sheet names (exact)
    const PDR_SHEET_NAME = "Intentia Assurance — Programme Decision Record Intake (Responses)";
    const TRAINING_SHEET_NAME = "Training Assurance Intake Form (Responses)";

    const STATUS_INTAKE = "Intake";
    const FREEZE_NO = "N";

    // ===== IDENTIFY SOURCE SHEET =====
    const sourceSheet = e.range.getSheet();
    const sourceName = sourceSheet.getName();

    let useCase = "";
    let guidance = "";

    if (sourceName === PDR_SHEET_NAME) {
      useCase = "Programme Decision Record";
      guidance = "Record decision context only. No hindsight.";
    } else if (sourceName === TRAINING_SHEET_NAME) {
      useCase = "Training Assurance";
      guidance = "Check intent + exclusions. No outcomes.";
    }

    // Ignore any other sheets
    if (!useCase) {
      return;
    }

    // ===== OPEN CASE REGISTER =====
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const register = ss.getSheetByName(REGISTER_SHEET_NAME);

    if (!register) {
      throw new Error("CASE_REGISTER sheet not found.");
    }

    // ===== READ FORM RESPONSES =====
    // For form submit events, use e.values array (row data) or e.namedValues (object with question keys)
    const values = e.values || [];
    const namedValues = e.namedValues || {};
    
    // Get headers from source sheet to map values
    const headers = sourceSheet.getRange(1, 1, 1, sourceSheet.getLastColumn()).getValues()[0];
    
    // Create a map of column index to header name for easier access
    const headerMap = {};
    headers.forEach((header, index) => {
      headerMap[header] = index;
    });

    // Extract values - try namedValues first, fallback to indexed values
    const caseId = (namedValues["Case ID"] && namedValues["Case ID"][0]) || 
                   (headerMap["Case ID"] !== undefined ? values[headerMap["Case ID"]] : "");
    const client = (namedValues["Organisation Name"] && namedValues["Organisation Name"][0]) || 
                   (headerMap["Organisation Name"] !== undefined ? values[headerMap["Organisation Name"]] : "");
    const contact = (namedValues["Primary Contact Email"] && namedValues["Primary Contact Email"][0]) || 
                    (headerMap["Primary Contact Email"] !== undefined ? values[headerMap["Primary Contact Email"]] : "");

    // ===== BUILD REGISTER ROW =====
    const newRow = [
      caseId,            // A Case ID
      client,            // B Client / Organisation
      useCase,           // C Use Case
      new Date(),        // D Intake Date
      STATUS_INTAKE,     // E Status
      FREEZE_NO,         // F Freeze Confirmed (Y/N)
      "",                // G Final PDF Sent Date
      "",                // H Operator Notes (Private)
      guidance,          // I Operator Guidance (System)
      "",                // J Days Since Intake (formula will calculate)
      ""                 // K Days Since Freeze (formula will calculate)
    ];

    register.appendRow(newRow);

    // ===== APPLY COLOUR =====
    const lastRow = register.getLastRow();
    applyRowColour(register, lastRow, STATUS_INTAKE);
    
  } catch (error) {
    // Log error for debugging
    Logger.log("Error in onFormSubmit: " + error.toString());
    // Re-throw to see in execution transcript
    throw error;
  }
}

/**
 * Row colour-coding (internal calm only)
 */
function applyRowColour(sheet, rowNumber, status) {
  let colour = "#FFFFFF"; // default

  switch (status) {
    case "Intake":
      colour = "#EDEDED"; // grey
      break;
    case "Frozen":
      colour = "#FFF4CC"; // amber
      break;
    case "Delivered":
      colour = "#D9F2D9"; // green
      break;
  }

  const lastCol = sheet.getLastColumn();
  if (lastCol > 0) {
    sheet.getRange(rowNumber, 1, 1, lastCol).setBackground(colour);
  }
}

