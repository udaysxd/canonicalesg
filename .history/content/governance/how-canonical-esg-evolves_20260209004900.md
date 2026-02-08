# How Canonical ESG Evolves

## Purpose

This document defines how Canonical ESG evolves over time.

It establishes:

- How changes are proposed  
- How architectural components are versioned  
- How stability is preserved  
- How backward compatibility is assessed  
- How regulatory and framework evolution is modelled without semantic drift  

Canonical ESG is designed as long-term semantic infrastructure.  
Its evolution model prioritises predictability, traceability, and structural integrity.

---

## Architectural Stability Doctrine

Canonical ESG evolution is governed by five stability doctrines:

### 1. Meaning Before Regulation
Semantic meaning (CDI layer) must remain stable across regulatory cycles.

### 2. Layer Isolation
Changes in one layer (CERM, CDI, CMP, jurisdiction) do not implicitly modify other layers.

### 3. Explicit Version Boundaries
All structural changes are versioned. No silent modification is permitted.

### 4. Immutability of Frozen Artefacts
Once frozen, artefacts are never edited retroactively.

### 5. Reference Durability
Previously published versions remain referenceable indefinitely.

---

## Architectural Components That May Evolve

Canonical ESG consists of independently versioned components:

- **CERM** — Canonical ESG Reference Model (data structures)
- **CDI** — Canonical Disclosure Intents (semantic concepts)
- **CMP** — Canonical Mapping Packs (framework interpretation)
- **Jurisdiction CMPs** — Regulatory overlays
- **Schemas** — Machine-readable specifications
- **Documentation** — Explanatory materials

Each component evolves independently.

A change to a CMP does not alter CDI meaning.  
A jurisdiction update does not redefine semantic concepts.  
A schema refinement does not imply reinterpretation.

---

## Versioning Model

Canonical ESG follows a structured semantic versioning approach.

### Major Version (X.0.0)

A major version introduces structural architectural change.

Examples:

- Redefinition of a core semantic boundary  
- Incompatible restructuring of the data model  
- Breaking schema modifications  
- Fundamental change in layering logic  

Major versions are rare and deliberate.  
Prior major versions remain published and referenceable.

---

### Minor Version (X.Y.0)

A minor version introduces additive, backward-compatible evolution.

Examples:

- New CDIs  
- New CMPs  
- Additional jurisdiction mappings  
- Extended examples  
- Non-breaking schema enhancements  

Minor versions preserve semantic stability.

---

### Patch Version (X.Y.Z)

A patch version corrects errors or clarifies documentation without altering meaning.

Examples:

- Typographical corrections  
- Citation fixes  
- Clarification of ambiguous explanatory text  
- Non-semantic schema corrections  

Patch versions never alter disclosure meaning.

---

## Compatibility Classification

Each change is classified into one of the following categories:

- **Non-breaking** — No impact on prior semantic meaning or structure  
- **Additive** — Expands scope without affecting prior definitions  
- **Clarificatory** — Improves wording without changing meaning  
- **Breaking** — Alters compatibility and requires major version increment  

Compatibility classification is documented in changelogs.

---

## Artefact Status Lifecycle

Each published artefact has a defined status.

### Draft
- Subject to revision  
- Intended for review  
- Not recommended for production dependency  

### Active
- Stable within its version line  
- Suitable for implementation  
- May receive minor or patch updates  

### Frozen
- Immutable  
- Permanently referenceable  
- Will not be modified  

### Superseded
- Replaced by a newer version  
- Retained for historical traceability  
- Not updated further  

Frozen artefacts are never retroactively edited.

---

## Change Proposal Lifecycle

All structural changes follow a documented lifecycle.

### 1. Proposal
A written proposal includes:

- Description of the change  
- Rationale  
- Affected architectural layer(s)  
- Compatibility impact  
- Migration considerations (if applicable)

### 2. Architectural Assessment
The proposal is evaluated for:

- Alignment with governance principles  
- Semantic stability impact  
- Layer isolation compliance  
- Compatibility classification  
- Risk of regulatory overreach  

### 3. Decision
The maintainer may:

- Accept  
- Request revision  
- Defer  
- Reject with documented reasoning  

All decisions are recorded for transparency.

### 4. Publication
Accepted changes are:

- Assigned a new version number  
- Classified by compatibility type  
- Documented in the changelog  
- Published with explicit status  

---

## Backward Compatibility Commitment

Canonical ESG prioritises backward compatibility.

Where compatibility cannot be preserved:

- A new major version is created  
- Prior versions remain accessible  
- Migration guidance is documented  

No published version is invalidated by subsequent evolution.

Users are never forced to upgrade.

---

## Handling External Framework Evolution

External sustainability standards evolve independently.

When frameworks update:

- A new CMP version may be issued  
- Prior CMP versions remain frozen  
- Framework version numbers are explicitly referenced  

Canonical ESG does not retroactively alter prior mappings to reflect new framework interpretations.

Regulatory evolution is modelled — not absorbed into semantic meaning.

---

## Deprecation Policy

Elements may be deprecated but are not removed from frozen versions.

Deprecation:

- Is explicitly documented  
- Includes rationale  
- Identifies successor elements where applicable  

Deprecated elements remain referenceable for historical consistency.

---

## Schema Evolution

Machine-readable schemas evolve under the same versioning discipline.

Schema evolution must:

- Preserve semantic meaning unless part of a major release  
- Maintain backward compatibility wherever possible  
- Explicitly document structural changes  

Schema version numbers correspond to architectural versioning.

---

## Governance Alignment

Evolution decisions operate under the Canonical ESG governance model.

Governance ensures:

- Architectural coherence  
- Preservation of neutrality  
- Transparent change history  
- Non-authoritative positioning  

Governance does not assert interpretive authority over external standards.

---

## Summary

Canonical ESG evolves deliberately.

Its evolution model is designed to balance:

- Stability with extensibility  
- Neutrality with interpretive clarity  
- Backward compatibility with architectural progress  

This disciplined evolution framework ensures Canonical ESG can function as durable semantic infrastructure beneath evolving sustainability reporting regimes.
