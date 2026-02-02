# Specification

## 1. Purpose

This document defines the **structural components and content expectations** of a Canonical Mapping Pack (CMP).

It describes:
- the information a CMP must contain to be valid,
- how mapping information is organised,
- what must be documented to ensure transparency and reuse.

This specification does not prescribe formats, syntax, or tooling.

---

## 2. Scope

This specification applies to:
- topic-specific and cross-topic CMPs,
- framework-specific and multi-framework CMPs,
- publicly available and proprietary CMPs.

It does not define:
- compliance requirements,
- validation rules,
- scoring or assurance criteria.

---

## 3. High-Level CMP Structure

A Canonical Mapping Pack consists of the following components:

1. **CMP Metadata**  
2. **Scope Declaration**  
3. **Interpretation Principles**  
4. **Disclosure Intent Mappings**  
5. **Cross-Framework Observations** (optional)  
6. **Limitations and Known Gaps**  
7. **Version History**

Each component serves a distinct purpose and must be present for a CMP to be considered complete.

---

## 4. CMP Metadata

### 4.1 Purpose
Provides identification, versioning, and provenance information for the CMP.

### 4.2 Required Elements
- **CMP identifier**: unique identifier for the CMP
- **CMP name**: human-readable title
- **Version**: semantic version identifier
- **Publication date**: date of release
- **Maintainer**: responsible party
- **License**: terms of use
- **CDI version referenced**: version of CDI used
- **Status**: draft, published, frozen, superseded

---

## 5. Scope Declaration

### 5.1 Purpose
Defines what the CMP covers and what it intentionally excludes.

### 5.2 Required Elements
- **Topic scope**: subject matter (e.g., climate, workforce)
- **Covered CDIs**: list of Canonical Disclosure Intents addressed
- **Referenced frameworks**: reporting frameworks and versions
- **Intended use**: statement of appropriate application

---

## 6. Interpretation Principles

### 6.1 Purpose
Documents the interpretive posture applied throughout the CMP.

### 6.2 Typical Content
- Treatment of ambiguity
- Relationship to materiality
- Handling of framework overlap
- Separation of quantity and methodology
- Exclusion of performance evaluation

---

## 7. Disclosure Intent Mappings

### 7.1 Structure
Each mapping documents how a single CDI is interpreted across frameworks.

### 7.2 Required Elements per Mapping
- **CDI identifier**: reference to the Canonical Disclosure Intent
- **CDI name**: human-readable name
- **Intent statement**: description of disclosure meaning
- **Framework mappings**: one entry per referenced framework

### 7.3 Framework Mapping Entry
- **Framework name**
- **Framework version**
- **Framework reference**: clause, standard, question ID, etc.
- **Mapping type**: full, partial, contextual, not applicable
- **Interpretation notes**: professional judgement and nuance

---

## 8. Cross-Framework Observations

### 8.1 Purpose
Documents structural observations that emerge only when comparing frameworks.

### 8.2 Content
Descriptive observations about:
- Common disclosure foundations
- Differences in granularity
- Divergent materiality treatment
- Structural alignments and misalignments

Must remain descriptive and non-evaluative.

---

## 9. Limitations and Known Gaps

### 9.1 Purpose
Prevents over-reliance and misuse of the CMP.

### 9.2 Required Acknowledgements
- Limited disclosure coverage
- Non-authoritative interpretation
- Framework evolution risk
- Exclusion of sector/jurisdiction specifics
- No performance assessment

---

## 10. Version History

### 10.1 Purpose
Supports traceability and controlled evolution.

### 10.2 Required Elements per Version
- Version identifier
- Publication date
- Summary of changes
- Status (draft, published, frozen, superseded)
- Supersession information (if applicable)

---

## 11. Non-Goals

This specification does not:
- define regulatory obligations,
- determine materiality,
- score or rank disclosures,
- certify compliance,
- replace professional judgement.

---

*Version: v1.0.1*
