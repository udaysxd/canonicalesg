# Design Principles

## 1. Purpose

The Canonical Disclosure Intent (CDI) framework defines a neutral, reusable layer for expressing **what an organisation intends to disclose externally**, independent of any specific reporting standard, regulation, or questionnaire.

These design principles govern the structure, scope, and evolution of CDI to ensure it serves as a stable semantic bridge between canonical data (CERM) and framework-specific disclosure requirements.

---

## 2. Separation of Meaning from Obligation

CDI explicitly separates:
- **disclosure meaning** (what is being communicated),
from
- **disclosure obligation** (where, how, and whether it must be reported).

CDIs describe *intent*, not *requirement*.  
They do not encode:
- mandatory status,
- jurisdictional applicability,
- compliance thresholds,
- enforcement logic.

This separation preserves the authority of reporting frameworks while enabling semantic reuse.

---

## 3. Framework Neutrality

CDIs shall remain independent of:
- specific reporting standards or frameworks,
- regulatory jurisdictions,
- disclosure numbering or clause references,
- questionnaire structures.

A CDI must be interpretable without reference to any external standard.  
Mappings to standards are handled exclusively through Canonical Mapping Packs (CMPs).

---

## 4. One Intent, Many Consumers

Each CDI represents a **single semantic disclosure concept** that may be consumed by:
- multiple reporting standards,
- multiple jurisdictions,
- multiple disclosure formats.

CDIs are designed so that:
- one disclosure intent may satisfy many framework requirements,
- the same intent is never redefined per framework.

This principle enables “model once, disclose globally”.

---

## 5. Data-Backed Semantics

Every CDI must be capable of being fulfilled by:
- one or more canonical elements defined in CERM,
- including metrics, targets, trajectories, or structured narratives.

CDIs do not perform calculations or transformations.  
They declare **dependencies**, not logic.

This ensures disclosure meaning is anchored in data truth rather than presentation.

---

## 6. Explicit Boundary and Temporal Applicability

CDIs must explicitly declare:
- whether organisational or value-chain boundaries apply,
- whether a reporting period is required,
- whether baseline or forward-looking references are permitted.

Boundary and temporal requirements are **declared**, not enforced.

This prevents implicit assumptions and supports consistent interpretation across frameworks.

---

## 7. Stability Over Time

CDIs are designed to be **semantically stable**, even as:
- reporting standards evolve,
- disclosure formats change,
- regulatory expectations shift.

Changes to CDI definitions are versioned and documented.  
A CDI shall not be redefined in a way that alters its fundamental meaning without a version increment.

Stability is essential to reuse, assurance, and longitudinal analysis.

---

## 8. Minimal and Non-Redundant Taxonomy

The CDI taxonomy shall:
- avoid duplication of meaning,
- avoid fragmentation into framework-specific variants,
- represent the minimum set of intents necessary to cover common disclosure needs.

Where two disclosures share the same meaning, they shall map to the same CDI.

This principle resists taxonomy inflation and preserves clarity.

---

## 9. Narrative and Quantitative Parity

CDI recognises that sustainability disclosures include:
- quantitative information,
- narrative explanations,
- and combinations of both.

CDIs shall support:
- purely quantitative intents,
- purely narrative intents,
- hybrid intents that combine structured data and narrative context.

Narrative disclosures are treated as first-class intents, not exceptions.

---

## 10. Non-Assertion of Compliance

CDIs do not assert:
- that a disclosure is complete,
- that it is compliant,
- that it satisfies regulatory expectations.

They merely express **what is being disclosed**.

Assessment of adequacy, completeness, or compliance occurs outside the CDI layer.

---

## 11. Traceability and Audit Support

Each CDI must support traceability by:
- referencing canonical data elements,
- maintaining stable identifiers,
- enabling linkage to evidence through assertions.

CDIs facilitate auditability but do not replace assurance processes.

---

## 12. Extensibility with Constraint

The CDI framework permits extension to support:
- new topics,
- emerging disclosure practices,
- sector-specific concepts.

Extensions:
- must not redefine existing CDIs,
- must follow the same design principles,
- must be clearly distinguished from core intents.

---

## 13. Governance and Change Control

Changes to CDI design principles or taxonomy require:
- documented rationale,
- public visibility of changes,
- versioned releases,
- alignment with CERM design principles.

The CDI framework shall be stewarded to preserve neutrality, stability, and interoperability.

---

## 14. Summary

The Canonical Disclosure Intent framework establishes a **stable semantic layer** that allows organisations to express disclosure meaning once and reuse it across evolving reporting frameworks.

By separating meaning from obligation, CDI enables scalable, auditable, and future-proof sustainability reporting without undermining the authority of existing standards.

---

*Version: v1.0.0*
