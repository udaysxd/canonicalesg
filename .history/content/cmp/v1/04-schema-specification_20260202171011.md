# Canonical Mapping Pack (CMP) Schema v0.1

## 1. Purpose and Scope

The Canonical Mapping Pack (CMP) Schema defines a structured, machine-readable format for documenting how Canonical Disclosure Intents (CDIs) are interpreted by sustainability reporting frameworks.

The CMP Schema enables:
- consistent documentation of interpretation decisions,
- traceability between disclosure intent and framework references,
- reuse of interpretation logic across reporting outputs,
- future tooling such as validation, diffing, and registry discovery.

The CMP Schema does not define reporting requirements, determine compliance, or assert authoritative interpretations.

---

## 2. Design Principles

The CMP Schema is governed by the following principles:

### 2.1 Non-Authoritativeness
The schema documents interpretation, not obligation.  
All authority remains with the referenced reporting frameworks.

### 2.2 Explicit Interpretation
Interpretive choices, assumptions, and ambiguities must be made explicit rather than implicit.

### 2.3 Separation of Concerns
The schema separates:
- disclosure meaning (CDI),
- interpretation (CMP),
- reporting framework requirements.

### 2.4 Extensibility
The schema supports additional frameworks, disclosure intents, and jurisdictions without modification to the core structure.

### 2.5 Human and Machine Readability
The schema is designed to be understandable by humans and consumable by machines.

---

## 3. High-Level CMP Structure

A Canonical Mapping Pack consists of the following top-level components:

1. CMP Metadata  
2. Scope Declaration  
3. Interpretation Principles  
4. Disclosure Intent Mappings  
5. Cross-Framework Observations (optional)  
6. Limitations and Known Gaps (required)  
7. Version History and Provenance  

---

## 4. CMP Metadata

### Purpose
Provides identification, versioning, and provenance information for the CMP.

### Required Fields
- CMP identifier  
- CMP version  
- Publication date  
- Maintainer  
- License  
- CDI version referenced  
- CMP status (e.g. illustrative, draft, frozen)

### Notes
Metadata enables discovery, citation, and version control.  
It does not imply endorsement or validation.

---

## 5. Scope Declaration

### Purpose
Defines what the CMP covers and what it intentionally excludes.

### Required Elements
- Topic scope (e.g. climate)
- List of covered CDI identifiers
- Referenced reporting frameworks
- Framework versions
- Intended use statement

### Notes
Scope declaration must be explicit to prevent misapplication of the CMP.

---

## 6. Interpretation Principles

### Purpose
Documents the interpretive posture applied throughout the CMP.

### Typical Content
- Treatment of ambiguity
- Relationship to materiality
- Handling of framework overlap
- Separation of quantity and methodology
- Exclusion of performance evaluation

---

## 7. Disclosure Intent Mapping Block

### Purpose
Documents how a single Canonical Disclosure Intent is interpreted across frameworks.

Each mapping block corresponds to one CDI.

---

### 7.1 Disclosure Intent Identification

**Required**
- CDI identifier  
- CDI name  
- CDI intent statement  

---

### 7.2 Framework Mapping Entries

For each referenced framework, the CMP must include a framework mapping entry.

#### Required Fields per Framework
- Framework name  
- Framework version  
- Framework reference (clause, standard, question ID, etc.)  
- Mapping type  

#### Mapping Type (controlled vocabulary)
- Full — framework requirement fully aligns with CDI intent  
- Partial — framework requirement partially aligns  
- Contextual — CDI intent is embedded within broader framework context  
- Not Applicable — CDI intent not addressed by framework  

---

### 7.3 Interpretation Notes

#### Purpose
Captures professional judgement, assumptions, and nuance.

#### Characteristics
- Free-text
- Preserved verbatim
- Not normalised or scored
- May document ambiguity or divergence

Interpretation notes are first-class elements of the CMP.

---

## 8. Cross-Framework Observations (Optional)

### Purpose
Documents structural observations that emerge only when comparing frameworks.

### Examples
- Differences in granularity
- Divergent materiality concepts
- Structural alignment or misalignment
- Common disclosure foundations

This section must remain descriptive and non-evaluative.

---

## 9. Limitations and Known Gaps (Required)

### Purpose
Prevents over-reliance and misuse of the CMP.

### Required Characteristics
- Explicit acknowledgement of coverage limits
- Statement of non-authoritative interpretation
- Recognition of framework evolution
- Exclusion of sector-specific or jurisdiction-specific requirements

---

## 10. Version History and Provenance

### Purpose
Supports traceability, auditability, and controlled evolution.

### Required Elements
- Version identifier
- Publication date
- Summary of changes
- Freeze or draft status
- Supersession information (if applicable)

CMPs must be versioned.  
Editorial changes and semantic changes must be distinguishable.

---

## 11. Schema Extensibility

The CMP Schema supports extension through:
- additional frameworks,
- additional disclosure intents,
- sector-specific CMPs,
- jurisdictional overlays.

Extensions must not redefine existing CDI semantics.

---

## 12. Non-Goals

The CMP Schema does not:
- define regulatory obligations,
- determine materiality,
- score or rank disclosures,
- certify compliance,
- replace professional judgement.

---

## 13. Relationship to Canonical ESG Components

- CERM provides canonical sustainability data structures.
- CDI defines disclosure meaning.
- CMP documents framework-specific interpretation.

The CMP Schema operates at the boundary between semantic meaning and reporting frameworks.

---

## 14. Status of This Specification

CMP Schema v0.1 is published as a reference specification.

It is intended to support early adoption, enable tooling experimentation, and inform future revisions.

---

End of CMP Schema v0.1
