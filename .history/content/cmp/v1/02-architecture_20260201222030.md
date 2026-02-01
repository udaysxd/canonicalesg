# Architecture

## 1. Architectural Intent

The Canonical Mapping Pack (CMP) architecture defines how **stable disclosure meaning**, expressed through Canonical Disclosure Intents (CDIs), is related to **framework-specific disclosure requirements** in a structured, transparent, and non-authoritative manner.

The CMP architecture is designed to:
- preserve the authority of sustainability reporting standards,
- make interpretation explicit rather than implicit,
- enable reuse of disclosure meaning across frameworks,
- support auditability and review of interpretive decisions,
- adapt to frequent regulatory and standard updates without destabilising core models.

CMPs are an **interpretation layer**, not a reporting engine or compliance system.

---

## 2. Position within the Canonical ESG Stack

CMP occupies the layer between **disclosure intent** and **framework-specific disclosure requirements**.


CMP does not modify, enrich, or reinterpret canonical data.  
It documents **how disclosure intent is consumed by a given framework**.

---

## 3. Core Architectural Components

The CMP architecture consists of the following logical components:

1. **CMP Metadata**
2. **Disclosure Intent References**
3. **Framework Requirement References**
4. **Interpretation Notes**
5. **Applicability and Scope Declarations**
6. **Version and Dependency References**

Each component has a single responsibility and is explicitly documented.

---

## 4. CMP Metadata

### 4.1 Purpose

CMP metadata establishes the **identity, scope, and provenance** of a mapping pack.

### 4.2 Typical Metadata Elements

CMP metadata may include:
- CMP name and identifier
- Maintainer or author
- Reporting framework and version referenced
- Topic scope (e.g. climate only)
- Jurisdictional assumptions (if any)
- CDI version consumed
- CERM version assumed
- Publication date and status

Metadata enables discovery, comparison, and lifecycle management of CMPs.

---

## 5. Disclosure Intent References

### 5.1 Role

Each CMP mapping unit references one or more **CDI identifiers**.

The CDI serves as the **anchor of meaning** within the CMP.

### 5.2 Characteristics

Disclosure intent references:
- are stable across frameworks,
- are never redefined within CMPs,
- may be reused across multiple mappings.

CMPs consume disclosure intent; they do not define it.

---

## 6. Framework Requirement References

### 6.1 Role

Framework requirement references identify **where and how a reporting framework consumes a disclosure intent**.

Examples include:
- clause or paragraph references,
- questionnaire identifiers,
- thematic sections.

### 6.2 Characteristics

Framework references:
- are version-specific,
- may change frequently,
- are treated as external artefacts.

CMPs explicitly acknowledge this volatility.

---

## 7. Interpretation Notes

### 7.1 Purpose

Interpretation Notes document **professional judgement** applied when relating a disclosure intent to a framework requirement.

### 7.2 Typical Content

Interpretation notes may include:
- explanation of alignment or partial alignment,
- assumptions made,
- conditional applicability,
- known ambiguities or divergences,
- rationale for mapping decisions.

Interpretation notes are mandatory where judgement is required.

---

## 8. Applicability and Scope Declarations

CMPs may declare:
- topic coverage (included and excluded areas),
- boundary assumptions,
- temporal assumptions,
- sectoral or organisational scope.

Applicability declarations:
- do not assert materiality,
- do not determine obligation,
- provide transparency for users and reviewers.

---

## 9. Version and Dependency Management

### 9.1 Version Awareness

Each CMP explicitly references:
- the version of the reporting framework,
- the version of CDI consumed,
- the version of CERM assumed (if relevant).

### 9.2 Change Management

CMPs are versioned artefacts.
Changes require:
- documented rationale,
- explicit version increments,
- preservation of prior versions.

Historical CMPs remain referenceable for audit and review.

---

## 10. Interaction with Assurance and Review

The CMP architecture supports assurance by:
- making interpretation explicit,
- enabling traceability from framework requirement to disclosure intent,
- preserving links to canonical data and evidence.

CMPs **support** assurance activities but do not replace audit procedures or professional judgement.

---

## 11. Architectural Non-Goals

The CMP architecture does not:
- determine compliance or adequacy,
- encode materiality thresholds,
- perform validation or scoring,
- prescribe software implementation approaches,
- replace standard-setting authority.

These concerns intentionally remain outside the CMP layer.

---

## 12. Summary

The Canonical Mapping Pack architecture establishes a **disciplined, transparent interpretation layer** between stable disclosure meaning and evolving reporting frameworks.

By separating interpretation from both data and disclosure intent, CMPs enable scalable, auditable, and maintainable sustainability reporting without creating shadow standards or automated compliance mechanisms.

---

*Version: v1.0.0*
