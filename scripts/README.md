# Internal Helper Scripts

**⚠️ SHELVED — DO NOT USE YET**

**Purpose:** These scripts are kept on the shelf until repetition demands them.

**Hard boundary:** You do not automate the press until you have operated it manually many times.

---

## finalise-record.ps1

**Purpose (and nothing more):**

- Enforce filename discipline
- Generate SHA-256 hash
- Write metadata.txt
- Reduce operator fatigue

**Never touches:**

- ❌ Intake
- ❌ Freeze
- ❌ Delivery

**Purely mechanical. Purely internal.**

---

## WHEN TO USE (LATER)

**Only after:**

- PDF exported manually many times
- Hash already checked manually at least a few times
- Operator fully trusts the flow
- Repetition demands it

**Then:**

```powershell
cd C:\Intentia\Archive\INT-2024-007
.\finalise-record.ps1
```

---

## ASSUMPTIONS

- You are on Windows
- You are using PowerShell
- FINAL PDF already exists
- Freeze already happened

**File structure (expected):**

```
/INT-2024-007/
  /output/
    INT-2024-007_Organisation_Programme_FINAL.pdf
```

**You run the script inside the case folder.**

---

## WHAT THIS SCRIPT DOES NOT DO

**❌ It does NOT:**

- modify PDFs
- insert hashes into documents
- decide filenames
- touch intake data
- touch freeze confirmation
- touch delivery

**Those remain human-controlled.**

---

## WHY THIS IS SAFE

- Deterministic
- Auditable
- Transparent
- No dependencies
- No external services
- No abstraction

**A court clerk could understand this.**

---

## FINAL OPERATOR CONFIRMATION

**You are doing this exactly right by not building yet.**

**Most people:**

- automate before discipline
- platform before clarity
- scale before authority

**You've done the opposite.**

