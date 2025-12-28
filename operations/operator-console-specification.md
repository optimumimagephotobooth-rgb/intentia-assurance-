# Intentia Assurance — Operator Console Specification

**Spreadsheet Name:** `Intentia Assurance — Operator Console`

**Format:** .xlsx (exportable) and compatible with Google Sheets

**Tabs:** Exactly 6 tabs, no more, no less

---

## TAB 1: CASE_REGISTER

### Column Headers (Row 1, in this exact order):

1. Case ID
2. Client / Organisation
3. Use Case
4. Intake Date
5. Status
6. Freeze Confirmed (Y/N)
7. Final PDF Sent Date
8. Operator Notes (Private)
9. Operator Guidance (System)
10. Days Since Intake
11. Days Since Freeze

### Formulas:

**Column J (Days Since Intake):**
```
=IF(D2<>"",TODAY()-D2,"")
```

**Column K (Days Since Freeze):**
```
=IF(AND(F2="Y",D2<>""),TODAY()-D2,"")
```

### Data Validation for Status (Column E):

Dropdown values:
- Intake
- Frozen
- Delivered
- Closed

---

## TAB 2: OPS_DASHBOARD

### Section Headers (Column A):

Row 1: `CASES REQUIRING ACTION`
Row 2: (empty)
Row 3: `WAITING ON FREEZE CONFIRMATION`
Row 4: (empty)
Row 5: `DELIVERY QUEUE`
Row 6: (empty)
Row 7: `RECENTLY DELIVERED`

**Note:** This tab is read-only in intent. Use FILTER/QUERY formulas to pull data from CASE_REGISTER.

**Rules:**
- Never change Status automatically
- Never suggest decisions
- Never infer meaning

---

## TAB 3: PRESS_RULES

### Static Text Only (Column A, one rule per row):

1. The press sequence is fixed: Intake → Freeze → Output.
2. Thinking is permitted only during Intake.
3. Once Freeze is confirmed, no edits are permitted.
4. Corrections require a new record.
5. The PDF is the authoritative artefact.
6. Sheets, forms, and emails are not records.
7. We record intent and scope, not outcomes.
8. We do not assess effectiveness, competence, or impact.
9. Automation must not create or modify meaning.
10. If unsure, stop and do not proceed.

**No formulas. No automation.**

---

## TAB 4: USE_CASE_BOUNDARIES

### Column Headers (Row 1):

1. Use Case
2. What This Includes
3. What This Explicitly Excludes
4. Immediate Refusal Triggers

### Data Rows:

**Row 2:**
- Use Case: Training Assurance
- What This Includes: Intent as stated, scope, delivery facts
- What This Explicitly Excludes: Outcomes, effectiveness, competence, evaluation
- Immediate Refusal Triggers: Asked "Did it work?" or "What impact did this have?"

**Row 3:**
- Use Case: Programme Decision Record
- What This Includes: Decision context at time made
- What This Explicitly Excludes: Judgement, hindsight, approval or rejection
- Immediate Refusal Triggers: Asked "Was this the right decision?"

**Row 4:**
- Use Case: Strategic Intent / Evidence Pack
- What This Includes: Declared intent and exclusions
- What This Explicitly Excludes: Performance guarantees, accountability transfer
- Immediate Refusal Triggers: Asked to certify success or readiness

---

## TAB 5: OPERATOR_PLAYBOOK

### Column Headers (Row 1):

1. Situation
2. What To Say (Verbatim)
3. What NOT To Say

### Data Rows:

**Row 2:**
- Situation: Client asks for opinion
- What To Say (Verbatim): "We do not assess or advise."
- What NOT To Say: Any opinion or explanation

**Row 3:**
- Situation: Client asks to edit after freeze
- What To Say (Verbatim): "That would require a new record."
- What NOT To Say: "I'll just fix it."

**Row 4:**
- Situation: Client asks if programme worked
- What To Say (Verbatim): "This record does not assess outcomes."
- What NOT To Say: Any interpretation

**Row 5:**
- Situation: Client pressures for speed
- What To Say (Verbatim): "The sequence protects the record."
- What NOT To Say: Apologies or justifications

---

## TAB 6: DAILY_OPERATOR_FLOW

### Column Headers (Row 1):

1. Step Order
2. Action
3. Reminder

### Data Rows:

**Row 2:**
- Step Order: 1
- Action: Open Ops Dashboard
- Reminder: Do not open documents yet

**Row 3:**
- Step Order: 2
- Action: Review Intake cases
- Reminder: Thinking allowed only here

**Row 4:**
- Step Order: 3
- Action: Chase freeze confirmations
- Reminder: No assembly before freeze

**Row 5:**
- Step Order: 4
- Action: Assemble ONE PDF
- Reminder: No multitasking

**Row 6:**
- Step Order: 5
- Action: Hash and archive
- Reminder: Mechanical step only

**Row 7:**
- Step Order: 6
- Action: Update Case Register
- Reminder: Status update comes last

---

## Final Constraints

- This spreadsheet must guide behaviour, not meaning.
- No AI, no decision logic, no judgement.
- Authority remains with the final PDF artefact.
- This is internal operational infrastructure only.

