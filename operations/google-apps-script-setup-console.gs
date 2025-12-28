/**
 * INTENTIA ASSURANCE
 * Operator Console Setup Script
 * 
 * RUN THIS ONCE to create all tabs with formulas and formatting
 * 
 * Instructions:
 * 1. Open Apps Script editor
 * 2. Paste this code
 * 3. Select function: setupOperatorConsole
 * 4. Click Run
 * 5. Authorize if prompted
 */

function setupOperatorConsole() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Create all tabs
  createCaseRegister(ss);
  createOpsDashboard(ss);
  createCasePipeline(ss);
  createCaseStatusChart(ss);
  createPressRules(ss);
  createUseCaseBoundaries(ss);
  createOperatorPlaybook(ss);
  createDailyOperatorFlow(ss);
  
  // Reorder tabs
  reorderTabs(ss);
  
  Logger.log("Operator Console setup complete!");
}

function createCaseRegister(ss) {
  let sheet = ss.getSheetByName("CASE_REGISTER");
  if (!sheet) {
    sheet = ss.insertSheet("CASE_REGISTER");
  } else {
    sheet.clear();
  }
  
  // Headers
  const headers = [
    "Case ID",
    "Client / Organisation",
    "Use Case",
    "Intake Date",
    "Status",
    "Freeze Confirmed (Y/N)",
    "Final PDF Sent Date",
    "Operator Notes (Private)",
    "Operator Guidance (System)",
    "Days Since Intake",
    "Days Since Freeze"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#366092");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setHorizontalAlignment("center");
  
  // Set column widths
  sheet.setColumnWidth(1, 120);  // Case ID
  sheet.setColumnWidth(2, 250);  // Client
  sheet.setColumnWidth(3, 180);  // Use Case
  sheet.setColumnWidth(4, 100);  // Intake Date
  sheet.setColumnWidth(5, 100);  // Status
  sheet.setColumnWidth(6, 150);  // Freeze Confirmed
  sheet.setColumnWidth(7, 150);  // PDF Sent Date
  sheet.setColumnWidth(8, 300);  // Operator Notes
  sheet.setColumnWidth(9, 300);  // Operator Guidance
  sheet.setColumnWidth(10, 120); // Days Since Intake
  sheet.setColumnWidth(11, 120); // Days Since Freeze
  
  // Add formulas for days columns (row 2)
  sheet.getRange(2, 10).setFormula('=IF(D2<>"",TODAY()-D2,"")'); // Days Since Intake
  sheet.getRange(2, 11).setFormula('=IF(AND(F2="Y",D2<>""),TODAY()-D2,"")'); // Days Since Freeze
  
  // Copy formulas down 100 rows
  sheet.getRange(2, 10, 100, 1).copyTo(sheet.getRange(2, 10, 100, 1), SpreadsheetApp.CopyPasteType.PASTE_FORMULA);
  sheet.getRange(2, 11, 100, 1).copyTo(sheet.getRange(2, 11, 100, 1), SpreadsheetApp.CopyPasteType.PASTE_FORMULA);
  
  // Add data validation for Status (Column E)
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["Intake", "Frozen", "Delivered", "Closed"], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 5, 1000, 1).setDataValidation(statusRule);
}

function createOpsDashboard(ss) {
  let sheet = ss.getSheetByName("OPS_DASHBOARD");
  if (!sheet) {
    sheet = ss.insertSheet("OPS_DASHBOARD");
  } else {
    sheet.clear();
  }
  
  // Summary section
  sheet.getRange(1, 1).setValue("Current Status Summary");
  sheet.getRange(1, 1).setFontWeight("bold");
  sheet.getRange(1, 2).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Intake")');
  sheet.getRange(1, 2).setFontWeight("bold").setBackground("#EDEDED");
  sheet.getRange(1, 3).setValue("In Intake");
  sheet.getRange(1, 4).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Frozen")');
  sheet.getRange(1, 4).setFontWeight("bold").setBackground("#FFF4CC");
  sheet.getRange(1, 5).setValue("Frozen");
  sheet.getRange(1, 6).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Delivered")');
  sheet.getRange(1, 6).setFontWeight("bold").setBackground("#D9F2D9");
  sheet.getRange(1, 7).setValue("Delivered");
  
  // Section headers
  sheet.getRange(3, 1).setValue("CASES REQUIRING ACTION");
  sheet.getRange(5, 1).setValue("WAITING ON FREEZE CONFIRMATION");
  sheet.getRange(7, 1).setValue("DELIVERY QUEUE");
  sheet.getRange(9, 1).setValue("RECENTLY DELIVERED");
  
  // Format section headers
  const sectionHeaders = [3, 5, 7, 9];
  sectionHeaders.forEach(row => {
    sheet.getRange(row, 1).setFontWeight("bold").setFontSize(12).setBackground("#D9E1F2");
  });
  
  // Add FILTER formulas
  sheet.getRange(4, 1).setFormula('=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Intake")');
  sheet.getRange(6, 1).setFormula('=FILTER(CASE_REGISTER!A:J, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F<>"Y"))');
  sheet.getRange(8, 1).setFormula('=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Frozen")');
  sheet.getRange(10, 1).setFormula('=FILTER(CASE_REGISTER!A:J, CASE_REGISTER!E:E="Delivered")');
  
  sheet.setColumnWidth(1, 500);
}

function createCasePipeline(ss) {
  let sheet = ss.getSheetByName("CASE_PIPELINE");
  if (!sheet) {
    sheet = ss.insertSheet("CASE_PIPELINE");
  } else {
    sheet.clear();
  }
  
  // Headers
  sheet.getRange(1, 1).setValue("Intake");
  sheet.getRange(1, 3).setValue("Frozen");
  sheet.getRange(1, 5).setValue("Assembling");
  sheet.getRange(1, 7).setValue("Delivered");
  sheet.getRange(1, 9).setValue("Closed");
  
  // Format headers
  const headers = [1, 3, 5, 7, 9];
  headers.forEach(col => {
    sheet.getRange(1, col).setFontWeight("bold").setBackground("#EDEDED").setHorizontalAlignment("center");
  });
  
  // Flow arrows
  sheet.getRange(1, 2).setValue("→").setFontWeight("bold").setFontSize(16).setHorizontalAlignment("center");
  sheet.getRange(1, 4).setValue("→").setFontWeight("bold").setFontSize(16).setHorizontalAlignment("center");
  sheet.getRange(1, 6).setValue("→").setFontWeight("bold").setFontSize(16).setHorizontalAlignment("center");
  sheet.getRange(1, 8).setValue("→").setFontWeight("bold").setFontSize(16).setHorizontalAlignment("center");
  
  // Add formulas
  sheet.getRange(2, 1).setFormula('=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Intake")*(CASE_REGISTER!F:F="N"))');
  sheet.getRange(2, 3).setFormula('=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Frozen")');
  sheet.getRange(2, 5).setFormula('=FILTER(CASE_REGISTER!B:B, (CASE_REGISTER!E:E="Frozen")*(CASE_REGISTER!G:G=""))');
  sheet.getRange(2, 7).setFormula('=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Delivered")');
  sheet.getRange(2, 9).setFormula('=FILTER(CASE_REGISTER!B:B, CASE_REGISTER!E:E="Closed")');
  
  // Apply colors to columns
  sheet.getRange(2, 1, 1000, 1).setBackground("#EDEDED"); // Intake - grey
  sheet.getRange(2, 3, 1000, 1).setBackground("#FFF4CC"); // Frozen - amber
  sheet.getRange(2, 5, 1000, 1).setBackground("#FFF4CC"); // Assembling - amber
  sheet.getRange(2, 7, 1000, 1).setBackground("#D9F2D9"); // Delivered - green
  sheet.getRange(2, 9, 1000, 1).setBackground("#E7E6E6"); // Closed - dark grey
  
  // Set column widths
  [1, 3, 5, 7, 9].forEach(col => sheet.setColumnWidth(col, 250));
}

function createCaseStatusChart(ss) {
  let sheet = ss.getSheetByName("CASE_STATUS_CHART");
  if (!sheet) {
    sheet = ss.insertSheet("CASE_STATUS_CHART");
  } else {
    sheet.clear();
  }
  
  // Headers
  sheet.getRange(1, 1).setValue("Status");
  sheet.getRange(1, 2).setValue("Count");
  
  // Format headers
  sheet.getRange(1, 1, 1, 2).setFontWeight("bold").setBackground("#366092").setFontColor("#FFFFFF");
  
  // Data rows
  sheet.getRange(2, 1).setValue("Intake");
  sheet.getRange(2, 2).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Intake")');
  
  sheet.getRange(3, 1).setValue("Frozen");
  sheet.getRange(3, 2).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Frozen")');
  
  sheet.getRange(4, 1).setValue("Delivered");
  sheet.getRange(4, 2).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Delivered")');
  
  sheet.getRange(5, 1).setValue("Closed");
  sheet.getRange(5, 2).setFormula('=COUNTIF(CASE_REGISTER!E:E,"Closed")');
  
  sheet.getRange(6, 1).setValue("Total");
  sheet.getRange(6, 2).setFormula('=SUM(B2:B5)');
  sheet.getRange(6, 1, 1, 2).setFontWeight("bold");
  
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 80);
  
  // Note: Chart must be created manually in Google Sheets
  // Select A1:B5, Insert → Chart, choose Column chart
}

function createPressRules(ss) {
  let sheet = ss.getSheetByName("PRESS_RULES");
  if (!sheet) {
    sheet = ss.insertSheet("PRESS_RULES");
  } else {
    sheet.clear();
  }
  
  const rules = [
    "The press sequence is fixed: Intake → Freeze → Output.",
    "Thinking is permitted only during Intake.",
    "Once Freeze is confirmed, no edits are permitted.",
    "Corrections require a new record.",
    "The PDF is the authoritative artefact.",
    "Sheets, forms, and emails are not records.",
    "We record intent and scope, not outcomes.",
    "We do not assess effectiveness, competence, or impact.",
    "Automation must not create or modify meaning.",
    "If unsure, stop and do not proceed."
  ];
  
  rules.forEach((rule, index) => {
    sheet.getRange(index + 1, 1).setValue(rule);
  });
  
  sheet.setColumnWidth(1, 600);
}

function createUseCaseBoundaries(ss) {
  let sheet = ss.getSheetByName("USE_CASE_BOUNDARIES");
  if (!sheet) {
    sheet = ss.insertSheet("USE_CASE_BOUNDARIES");
  } else {
    sheet.clear();
  }
  
  // Headers
  const headers = ["Use Case", "What This Includes", "What This Explicitly Excludes", "Immediate Refusal Triggers"];
  sheet.getRange(1, 1, 1, 4).setValues([headers]);
  sheet.getRange(1, 1, 1, 4).setFontWeight("bold").setBackground("#366092").setFontColor("#FFFFFF");
  
  // Data
  const data = [
    ["Training Assurance", "Intent as stated, scope, delivery facts", "Outcomes, effectiveness, competence, evaluation", 'Asked "Did it work?" or "What impact did this have?"'],
    ["Programme Decision Record", "Decision context at time made", "Judgement, hindsight, approval or rejection", 'Asked "Was this the right decision?"'],
    ["Strategic Intent / Evidence Pack", "Declared intent and exclusions", "Performance guarantees, accountability transfer", "Asked to certify success or readiness"]
  ];
  
  sheet.getRange(2, 1, data.length, 4).setValues(data);
  
  // Format data rows
  sheet.getRange(2, 1, data.length, 4).setWrap(true).setVerticalAlignment("top");
  
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 300);
  sheet.setColumnWidth(3, 350);
  sheet.setColumnWidth(4, 350);
}

function createOperatorPlaybook(ss) {
  let sheet = ss.getSheetByName("OPERATOR_PLAYBOOK");
  if (!sheet) {
    sheet = ss.insertSheet("OPERATOR_PLAYBOOK");
  } else {
    sheet.clear();
  }
  
  // Headers
  const headers = ["Situation", "What To Say (Verbatim)", "What NOT To Say"];
  sheet.getRange(1, 1, 1, 3).setValues([headers]);
  sheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#366092").setFontColor("#FFFFFF");
  
  // Data
  const data = [
    ["Client asks for opinion", "We do not assess or advise.", "Any opinion or explanation"],
    ["Client asks to edit after freeze", "That would require a new record.", "I'll just fix it."],
    ["Client asks if programme worked", "This record does not assess outcomes.", "Any interpretation"],
    ["Client pressures for speed", "The sequence protects the record.", "Apologies or justifications"]
  ];
  
  sheet.getRange(2, 1, data.length, 3).setValues(data);
  sheet.getRange(2, 1, data.length, 3).setWrap(true).setVerticalAlignment("top");
  
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 300);
  sheet.setColumnWidth(3, 300);
}

function createDailyOperatorFlow(ss) {
  let sheet = ss.getSheetByName("DAILY_OPERATOR_FLOW");
  if (!sheet) {
    sheet = ss.insertSheet("DAILY_OPERATOR_FLOW");
  } else {
    sheet.clear();
  }
  
  // Headers
  const headers = ["Step Order", "Action", "Reminder"];
  sheet.getRange(1, 1, 1, 3).setValues([headers]);
  sheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#366092").setFontColor("#FFFFFF");
  
  // Data
  const data = [
    ["1", "Open Ops Dashboard", "Do not open documents yet"],
    ["2", "Review Intake cases", "Thinking allowed only here"],
    ["3", "Chase freeze confirmations", "No assembly before freeze"],
    ["4", "Assemble ONE PDF", "No multitasking"],
    ["5", "Hash and archive", "Mechanical step only"],
    ["6", "Update Case Register", "Status update comes last"]
  ];
  
  sheet.getRange(2, 1, data.length, 3).setValues(data);
  
  sheet.setColumnWidth(1, 100);
  sheet.setColumnWidth(2, 200);
  sheet.setColumnWidth(3, 200);
}

function reorderTabs(ss) {
  const tabOrder = [
    "CASE_REGISTER",
    "OPS_DASHBOARD",
    "CASE_PIPELINE",
    "CASE_STATUS_CHART",
    "PRESS_RULES",
    "USE_CASE_BOUNDARIES",
    "OPERATOR_PLAYBOOK",
    "DAILY_OPERATOR_FLOW"
  ];
  
  const sheets = ss.getSheets();
  const sheetMap = {};
  sheets.forEach(sheet => {
    sheetMap[sheet.getName()] = sheet;
  });
  
  tabOrder.forEach((name, index) => {
    if (sheetMap[name]) {
      ss.setActiveSheet(sheetMap[name]);
      ss.moveActiveSheet(index + 1);
    }
  });
}

