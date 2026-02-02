# How Canonical ESG Evolves

## Purpose

This document describes how Canonical ESG evolves over time.

It defines:
- how changes are proposed,
- how versions are created and frozen,
- how stability and backward compatibility are maintained.

The goal is to ensure that Canonical ESG remains predictable, referenceable, and safe to depend on.

---

## Guiding Principles

Evolution of Canonical ESG is guided by the following principles:

- **Stability first**: Existing references must remain valid.
- **Explicit change**: All changes are documented and versioned.
- **Separation of concerns**: Data models, disclosure intents, and mappings evolve independently.
- **Non-authoritativeness**: Evolution does not assert regulatory or interpretive authority.
- **Transparency**: Rationale and impact of changes are visible.

---

## What Can Change

Canonical ESG consists of multiple components that may evolve independently:

- **CERM** — Canonical ESG Reference Model (data structures)
- **CDI** — Canonical Disclosure Intents (semantic meaning)
- **CMP** — Canonical Mapping Packs (framework interpretation)
- **Schemas** — Machine-readable specifications
- **Documentation** — Explanatory and reference material

A change to one component does not automatically imply changes to others.

---

## Versioning Model

Canonical ESG uses explicit semantic-style versioning.

### Major Versions
Major versions introduce structural changes that may affect compatibility.

Examples:
- restructured data models,
- redefinition of core concepts,
- breaking changes to schemas.

Major versions are rare and intentional.

---

### Minor Versions
Minor versions introduce extensions without changing existing meaning.

Examples:
- new disclosure intents,
- additional mappings,
- expanded examples.

Minor versions preserve backward compatibility.

---

### Patch Versions
Patch versions correct errors or clarify documentation without changing meaning.

Examples:
- typo corrections,
- reference fixes,
- clarification of ambiguous language.

Patch versions do not alter semantics.

---

## Draft, Frozen, and Superseded States

Each published artefact has an explicit status.

### Draft
- Subject to change
- Intended for review and iteration
- Not recommended for long-term dependency

### Frozen
- Stable and immutable
- Safe to reference and implement
- Remains available indefinitely

### Superseded
- Replaced by a newer version
- Retained for historical reference
- Not updated further

Frozen versions are never modified.

---

## Change Proposal Lifecycle

Changes follow a documented lifecycle:

1. **Proposal**  
   A change is proposed with a clear description and rationale.

2. **Assessment**  
   Impact on existing versions, compatibility, and scope is evaluated.

3. **Decision**  
   The proposal is accepted, revised, deferred, or rejected with explanation.

4. **Publication**  
   Accepted changes are published as a new version with documented status.

This process prioritises clarity over speed.

---

## Backward Compatibility

Canonical ESG prioritises backward compatibility.

Where compatibility cannot be preserved:
- the change is introduced as a new major version,
- prior versions remain available and referenceable,
- migration considerations are documented.

Users are never forced to upgrade.

---

## Relationship to External Framework Changes

Reporting frameworks evolve independently.

Canonical ESG:
- may publish new CMP versions to reflect framework updates,
- does not retroactively modify frozen CMPs,
- documents framework versions explicitly.

Framework evolution does not invalidate prior Canonical ESG versions.

---

## Deprecation

Elements may be deprecated but not removed.

Deprecation:
- is explicitly documented,
- includes rationale,
- identifies successor elements where applicable.

Deprecated elements remain referenceable.

---

## Governance and Oversight

Evolution decisions are governed by the Canonical ESG governance model.

The maintainer ensures:
- alignment with design principles,
- consistency across components,
- transparent documentation.

Governance does not imply endorsement or authority.

---

## Summary

Canonical ESG evolves deliberately and transparently.

Its evolution model is designed to balance:
- stability and progress,
- openness and consistency,
- reuse and independence.

This ensures Canonical ESG can serve as long-term reference infrastructure for sustainability reporting ecosystems.
