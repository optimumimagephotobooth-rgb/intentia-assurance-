# Ops Dashboard Fields

**Simple, factual, and non-performative.**

**One row = one record**

---

## 1️⃣ CASE IDENTIFICATION

**Reference ID**
- Format: INT-YYYY-XXX or PDR-YYYY-XXX

**Press Type**
- Training Assurance Pack / Programme Decision Record

**Organisation Name**
- As provided

**Programme / Initiative Name**
- As provided

---

## 2️⃣ TIMELINE (Factual Only)

**Intake Date**
- Date intake information received

**Freeze Date**
- Date client confirmed accuracy

**Freeze Time (UTC)**
- Exact timestamp of freeze

**PDF Generated Date**
- Date FINAL PDF created

**Delivery Date**
- Date PDF sent to client

**Archive Date**
- Date case archived

**No durations.**
**No SLAs.**
**No speed metrics.**

---

## 3️⃣ PROCESS STATUS

**Status**
- Intake / Review / Frozen / Generated / Delivered / Archived

**Current Step**
- What happens next (one line)

**Blockers (if any)**
- Factual only (max 10 words)

---

## 4️⃣ DOCUMENT INTEGRITY

**FINAL PDF Filename**
- Full filename as stored

**SHA-256 Hash**
- Hash value

**Hash Verified (Yes/No)**
- Verification status

**Hash Verification Date**
- Date hash was verified

**If "No" ever appears → immediate stop.**

---

## 5️⃣ SCOPE DISCIPLINE CHECKS (Yes/No)

**These are internal controls, not client-facing.**

- [ ] Intent Recorded Verbatim
- [ ] Explicit Non-Objectives Included
- [ ] Counterfactual Boundary Included
- [ ] Operator Restraint Included
- [ ] No Post-Freeze Edits Made

**Any "No" requires a note.**

---

## 6️⃣ CLIENT BEHAVIOUR SIGNALS (Factual Only)

**No interpretation. Just observable behaviour.**

- [ ] Client Requested Post-Freeze Changes (Yes/No)
- [ ] Legal Review Occurred (Yes/No)
- [ ] Legal Blocked Delivery (Yes/No)
- [ ] Procurement Involved (Yes/No)
- [ ] Record Accepted Without Changes (Yes/No)

**Do not add comments unless necessary.**

---

## 7️⃣ COMMERCIAL FACTS (Not Analysis)

**Press Fee (£)**
- Amount charged

**Invoice Issued Date**
- Date invoice sent

**Invoice Paid (Yes/No)**
- Payment status

**Payment Date**
- Date payment received

**No margin tracking.**
**No revenue projections.**

---

## 8️⃣ OPERATOR NOTES (Max 3 Lines)

**This is the only free-text field.**

**Operator Notes (max 3 lines)**

**Rules:**

- No opinions
- No emotions
- No client quotes
- Only process observations

**Example (acceptable):**
"Client attempted to reword intent post-freeze. Refused. New record offered."

**Example (not acceptable):**
"Client seemed nervous but happy."

---

## 9️⃣ POST-DELIVERY REVIEW FLAGS

**Run these after delivery.**

- [ ] Post-Delivery Checklist Completed (Yes/No)
- [ ] Process Issue Identified (Yes/No)
- [ ] Template Change Required (Yes/No)

**Template changes should be rare.**

---

## WHAT IS INTENTIONALLY NOT IN THE DASHBOARD

**Do NOT include:**

- satisfaction scores
- NPS
- usage metrics
- engagement levels
- qualitative feedback
- "value delivered"
- "impact"

**Those destroy neutrality.**

---

## HOW TO USE THIS DASHBOARD (RULES)

- One row = one record
- Fields are factual, not interpretive
- No retroactive editing
- Dashboard exists to protect the press, not to manage clients
- Review weekly, not daily

---

## THE ONE METRIC THAT MATTERS (Mentally)

**Not a field — a principle:**

**Did the record hold without explanation?**

**If yes, the system is working.**

