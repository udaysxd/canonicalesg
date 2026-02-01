# CMP Registry Specification

## 1. Purpose

This document defines the **Canonical Mapping Pack (CMP) Registry** as a conceptual and informational construct for the **discovery, identification, and governance of CMPs**.

The CMP Registry:
- does not host CMP content,
- does not validate or endorse CMPs,
- does not determine compliance or quality.

It exists to make CMPs **discoverable, referenceable, and governable** across organisations and ecosystems.

---

## 2. Scope of the Registry

The CMP Registry applies to:
- public and proprietary CMPs,
- topic-specific and cross-topic CMPs,
- framework-specific and multi-framework CMPs.

It does not prescribe:
- where CMPs are stored,
- how CMPs are implemented,
- who may create CMPs.

The registry is **informational**, not authoritative.

---

## 3. Registry Model

The CMP Registry is a **catalogue of CMP metadata**, not a repository of mapping content.

Each registry entry represents a **single CMP instance**, identified and described through metadata fields.

The registry supports:
- discovery,
- comparison,
- lifecycle management,
- audit reference.

---

## 4. CMP Registry Entry

### 4.1 Required Metadata Fields

Each CMP registry entry shall include, at minimum:

- **CMP Identifier**  
  A globally unique identifier for the CMP.

- **CMP Name**  
  A human-readable name.

- **Maintainer**  
  Individual or organisation responsible for the CMP.

- **Reporting Framework(s)**  
  The reporting standard(s) referenced.

- **Framework Version(s)**  
  Specific version(s) of the referenced framework(s).

- **CDI Version**  
  The version of Canonical Disclosure Intents consumed.

- **CMP Version**  
  The version identifier of the CMP itself.

- **Publication Date**

---

### 4.2 Optional Metadata Fields

Optional registry fields may include:

- Topic scope (e.g. climate only)
- Jurisdictional assumptions
- Sector focus
- License or usage terms
- Intended audience
- Status (draft, stable, deprecated)
- Known limitations summary
- Link to CMP content
- Contact or support reference

Optional fields enhance discoverability but are not mandatory.

---

## 5. Discovery and Referencing

Registry entries should support:
- unique referencing (e.g. via identifier or URL),
- citation in reports, audits, and documentation,
- comparison across CMPs covering similar scope.

Discovery mechanisms may include:
- searchable indices,
- filters by framework, topic, or jurisdiction,
- version-aware listings.

Implementation details are intentionally out of scope.

---

## 6. Governance and Trust Signals

The registry does not certify CMP quality.

However, it may expose **trust-relevant signals**, such as:
- maintainer identity,
- publication history,
- declared scope and limitations,
- update cadence.

Users remain responsible for assessing suitability and reliability.

---

## 7. Public and Proprietary CMPs

The registry supports both:
- **public CMPs**, freely accessible and reusable,
- **proprietary CMPs**, accessible under commercial or contractual terms.

Registry inclusion does not imply openness or endorsement.

---

## 8. Versioning and Lifecycle

Each CMP registry entry must:
- reference a specific CMP version,
- preserve historical versions,
- clearly indicate deprecated or superseded CMPs.

Registry entries should not be overwritten without version increment.

---

## 9. Relationship to Standards and Regulators

The CMP Registry:
- does not represent standards bodies,
- does not issue interpretations,
- does not determine regulatory compliance.

Registry entries referencing specific standards must clearly indicate that interpretations remain the responsibility of the CMP maintainer.

---

## 10. Relationship to Assurance

CMP registry entries may be referenced in:
- assurance documentation,
- audit working papers,
- internal control descriptions.

The registry supports **traceability**, not assurance conclusions.

---

## 11. Extensibility

The registry model may be extended to include:
- additional metadata fields,
- confidence or maturity indicators,
- linkage to tooling ecosystems.

Extensions must not alter the non-authoritative nature of the registry.

---

## 12. Non-Goals

The CMP Registry does not:
- score or rank CMPs,
- enforce completeness,
- validate correctness,
- replace professional judgement.

These functions remain outside the registry’s scope.

---

## 13. Summary

The CMP Registry provides a **neutral, transparent mechanism** for discovering and referencing Canonical Mapping Packs without asserting authority or compliance.

By separating discovery from interpretation and validation, the registry enables a scalable ecosystem of CMPs while preserving professional judgement and standards authority.

---

*Version: v1.0.0*
