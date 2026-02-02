# Architecture

## 1. Architectural Intent

The Canonical Disclosure Intent (CDI) architecture defines how disclosure meaning is represented, managed, and reused independently of reporting frameworks.

The CDI architecture:
- bridges canonical data (CERM) and framework-specific requirements,
- enables reuse of disclosure meaning across standards,
- preserves traceability from disclosed information back to source data,
- supports stable evolution as disclosure expectations change.

CDI does not define reporting workflows, submission formats, or compliance logic.

---

## 2. Position within the CERM Architecture

CDI occupies the semantic layer between:
- **canonical data assertions**, and
- **framework-specific disclosure requirements**.


CDI **does not replace** data modelling or disclosure frameworks; it provides a stable semantic interface between them.

---

## 3. Core Architectural Components

The CDI architecture consists of the following core components:

1. **Disclosure Intent**
2. **Intent Dependencies**
3. **Applicability Declarations**
4. **Fulfilment Contracts**
5. **Intent Identifiers and Versioning**

Each component has a single responsibility and interacts through explicit, documented relationships.

---

## 4. Disclosure Intent

### 4.1 Definition

A **Disclosure Intent** represents a single, well-defined disclosure concept that an organisation may choose to communicate externally.

Examples include:
- “Gross Scope 1 greenhouse gas emissions”
- “Existence of a climate transition plan”
- “Progress against emissions reduction targets”

---

### 4.2 Characteristics

A Disclosure Intent:
- has a stable, globally unique identifier,
- has a clear semantic definition,
- is independent of reporting frameworks,
- is fulfilled by one or more canonical data elements,
- may be quantitative, narrative, or hybrid.

Disclosure Intents express **meaning**, not obligation or format.

---

## 5. Intent Dependencies

### 5.1 Purpose

Intent Dependencies define how a Disclosure Intent relates to canonical data and other intents.

Dependencies may include:
- required metrics,
- required targets or trajectories,
- prerequisite intents,
- supporting narrative elements.

---

### 5.2 Characteristics

Dependencies:
- are declarative, not procedural,
- do not perform calculations,
- do not enforce completeness,
- support traceability and auditability.

Dependencies enable consistent reuse of disclosure meaning across frameworks.

---

## 6. Applicability Declarations

### 6.1 Purpose

Applicability Declarations describe the **context in which a Disclosure Intent is meaningful**.

They may declare:
- boundary relevance (e.g. organisational, value chain),
- temporal relevance (historical, forward-looking),
- optionality (always applicable vs context-dependent).

---

### 6.2 Non-Enforcement

Applicability declarations:
- do not determine whether an organisation must disclose,
- do not encode materiality thresholds,
- do not imply regulatory scope.

They provide **semantic clarity**, not compliance logic.

---

## 7. Fulfilment Contracts

### 7.1 Purpose

A **Fulfilment Contract** defines the conditions under which a Disclosure Intent may be considered populated.

It specifies:
- required canonical element types,
- acceptable data structures,
- optional narrative components.

---

### 7.2 Characteristics

Fulfilment Contracts:
- do not assert correctness or completeness,
- do not evaluate quality,
- do not imply assurance.

They exist to ensure consistent interpretation of what it means to “provide” a disclosure.

---

## 8. Identifiers and Versioning

### 8.1 Stable Identification

Each Disclosure Intent is assigned:
- a stable identifier,
- a versioned definition,
- a human-readable name and description.

Identifiers remain stable across versions unless semantic meaning changes.

---

### 8.2 Version Evolution

Changes to Disclosure Intents follow these rules:
- editorial clarifications do not change identifiers,
- semantic changes require version increments,
- deprecated intents remain referenceable.

This supports longitudinal analysis and audit traceability.

---

## 9. Interaction with Canonical Mapping Packs (CMP)

CDI does not contain:
- standard references,
- clause numbers,
- jurisdictional conditions.

Mapping between Disclosure Intents and reporting frameworks is handled exclusively through **Canonical Mapping Packs (CMPs)**.

CMPs:
- consume CDI identifiers,
- document interpretation choices,
- evolve independently of CDI.

This separation preserves neutrality and avoids entanglement with regulatory change cycles.

---

## 10. Extensibility

The CDI architecture supports extension through:
- new disclosure intents,
- sector-specific intent sets,
- experimental or provisional intents.

Extensions must:
- not redefine existing intents,
- follow CDI design principles,
- be clearly distinguished from core taxonomy elements.

---

## 11. Architectural Non-Goals

The CDI architecture does not:
- automate disclosure decisions,
- replace professional judgement,
- encode regulatory logic,
- prescribe software implementation patterns.

Its role is semantic clarity and reuse, not enforcement.

---

## 12. Summary

The CDI architecture establishes a **stable semantic layer** that enables disclosure meaning to be expressed once and reused across multiple reporting frameworks.

By decoupling disclosure intent from obligation and presentation, CDI provides the foundation for scalable, auditable, and future-proof sustainability reporting systems.

---

*Version: v1.0.0*
