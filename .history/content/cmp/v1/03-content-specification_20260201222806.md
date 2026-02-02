# Specification

## 1. Purpose

This specification defines the **structural components and content expectations** of a Canonical Mapping Pack (CMP).

It describes:
- the information a CMP contains,
- how mapping information is organised,
- what must be documented to ensure transparency and reuse.

This specification is **descriptive**, not normative.  
It does not prescribe implementation formats or tooling.

---

## 2. Scope of the Specification

This specification applies to:
- topic-specific and cross-topic CMPs,
- framework-specific and multi-framework CMPs,
- publicly available and proprietary CMPs.

It does not define:
- compliance requirements,
- validation rules,
- scoring or assurance criteria.

---

## 3. CMP Structural Overview

A CMP consists of the following logical sections:

1. CMP Metadata
2. Scope and Coverage Declaration
3. Disclosure Intent Mappings
4. Interpretation Notes
5. Limitations and Known Gaps
6. Versioning and Change History

Each section serves a distinct purpose and must be explicitly documented.

---

## 4. CMP Metadata

### 4.1 Required Metadata Elements

A CMP shall document, at minimum:
- CMP name
- CMP identifier
- Maintainer or author
- Reporting framework referenced
- Reporting framework version
- CDI version consumed
- Publication date
- CMP version

### 4.2 Optional Metadata Elements

Optional metadata may include:
- jurisdictional assumptions
- sector focus
- licensing terms
- intended audience
- status (draft, stable, deprecated)

Metadata enables discovery, comparison, and governance.

---

## 5. Scope and Coverage Declaration

CMPs must explicitly state:
- which topics are covered,
- which disclosure intents are included,
- which framework sections are addressed,
- any known exclusions or partial coverage.

Coverage declarations:
- do not assert completeness,
- do not imply materiality,
- provide transparency for users and reviewers.

---

## 6. Disclosure Intent Mappings

### 6.1 Mapping Unit

The fundamental unit of a CMP is a **mapping between one Disclosure Intent and one or more framework requirements**.

Each mapping unit includes:
- CDI identifier
- Framework reference(s)
- Mapping type (e.g. full, partial, contextual)

---

### 6.2 Mapping Characteristics

Mappings:
- reference disclosure intent as the anchor of meaning,
- do not redefine CDI semantics,
- may reference multiple framework elements,
- may be reused across CMPs.

---

## 7. Interpretation Notes

### 7.1 Purpose

Interpretation Notes document the **professional judgement** applied when establishing a mapping.

### 7.2 Expected Content

Interpretation notes may include:
- explanation of alignment or divergence,
- assumptions or conditions,
- framework-specific nuances,
- cross-references to other intents,
- known ambiguities.

Where judgement is involved, interpretation notes are required.

---

## 8. Limitations and Known Gaps

CMPs must document:
- known gaps in coverage,
- unresolved ambiguities,
- framework areas intentionally excluded,
- dependencies on external guidance.

This section prevents over-reliance and misuse.

---

## 9. Versioning and Change History

Each CMP must include:
- version identifier,
- summary of changes,
- date of change,
- impact on prior mappings.

Previous versions remain referenceable.

---

## 10. Relationship to CERM and CDI

CMPs:
- consume CDI identifiers,
- assume canonical data is modelled using CERM,
- do not modify or extend CERM or CDI definitions.

This preserves separation of concerns.

---

## 11. Implementation Neutrality

This specification does not mandate:
- file formats,
- storage models,
- APIs,
- tooling.

CMPs may be implemented using:
- documents,
- structured files,
- databases,
- software systems.

The specification concerns **content and structure**, not technology.

---

## 12. Summary

This specification defines a **clear, repeatable structure** for Canonical Mapping Packs.

By standardising *what* must be documented—without prescribing *how*—it enables consistent interpretation, auditability, and reuse while preserving flexibility for diverse implementations.

---

*Version: v1.0.0*
