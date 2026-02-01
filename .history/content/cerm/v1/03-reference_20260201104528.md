# Reference Model

## 1. Purpose of the Reference Model

This section defines the **canonical elements** that constitute the Canonical ESG Reference Model (CERM).

The reference model specifies:
- the types of elements recognised by CERM,
- their semantic meaning,
- their relationships and constraints.

It does **not** prescribe:
- calculation formulas,
- reporting thresholds,
- materiality decisions,
- compliance interpretations.

The reference model is intended to be **stable, extensible, and implementation-agnostic**.

---

## 2. Core Element Types

CERM defines the following core element types:

1. **Entity**
2. **Activity**
3. **Metric**
4. **Boundary**
5. **Time Period**
6. **Target**
7. **Trajectory**
8. **Methodology**
9. **Evidence**
10. **Assertion**

Each element type has a single responsibility and may be referenced by other elements through stable identifiers.

---

## 3. Entity

### 3.1 Definition

An **Entity** represents an organisational unit for which sustainability information is asserted.

Examples include:
- a legal entity,
- a reporting group,
- a business unit,
- a facility or asset.

---

### 3.2 Characteristics

An Entity:
- has a unique identifier,
- may participate in one or more boundaries,
- may perform activities,
- is not tied to a specific legal or accounting framework.

Entities are defined independently of reporting scope or consolidation logic.

---

## 4. Activity

### 4.1 Definition

An **Activity** represents a real-world process, operation, or behaviour that may give rise to sustainability impacts.

Examples include:
- fuel combustion,
- electricity consumption,
- material production,
- transportation,
- procurement.

---

### 4.2 Characteristics

An Activity:
- occurs within a time period,
- is associated with one or more entities,
- may generate one or more metrics,
- may reference a methodology.

Activities describe **what happens**, not how it is reported.

---

## 5. Metric

### 5.1 Definition

A **Metric** represents a quantitative measurement or calculated value related to sustainability performance.

Examples include:
- greenhouse gas emissions,
- energy consumption,
- emissions intensity,
- water withdrawal.

---

### 5.2 Characteristics

A Metric:
- has a defined unit of measure,
- applies to a specific time period,
- is associated with a boundary,
- may be measured or derived,
- may reference a methodology.

Metrics are **facts or computed assertions**, not disclosures.

---

## 6. Boundary

### 6.1 Definition

A **Boundary** defines the organisational, operational, or value-chain scope within which activities and metrics are included.

Examples include:
- operational control,
- financial control,
- equity share,
- upstream or downstream value-chain scope.

---

### 6.2 Characteristics

A Boundary:
- is explicitly defined and identifiable,
- may apply to entities, activities, or metrics,
- may change over time and therefore be versioned,
- does not imply regulatory acceptability.

Boundaries ensure scope assumptions are explicit rather than implicit.

---

## 7. Time Period

### 7.1 Definition

A **Time Period** represents the temporal interval to which an assertion applies.

Examples include:
- a fiscal year,
- a calendar year,
- a reporting quarter,
- a baseline year.

---

### 7.2 Characteristics

A Time Period:
- has a defined start and end,
- may be used for historical or forward-looking assertions,
- may serve as a baseline or target reference.

Time Periods are explicit to prevent temporal ambiguity.

---

## 8. Target

### 8.1 Definition

A **Target** represents an intended future outcome related to sustainability performance.

Examples include:
- emissions reduction targets,
- energy efficiency targets,
- renewable energy adoption targets.

---

### 8.2 Characteristics

A Target:
- references one or more metrics,
- specifies a baseline time period,
- specifies one or more target time periods,
- does not assert achievement.

Targets describe **intent**, not outcome.

---

## 9. Trajectory

### 9.1 Definition

A **Trajectory** represents a planned or expected pathway between a baseline and a target.

Examples include:
- linear reduction pathways,
- science-based pathways,
- internally defined pathways.

---

### 9.2 Characteristics

A Trajectory:
- is associated with a target,
- may reference external scenarios or methodologies,
- is descriptive, not normative.

Trajectories enable progress assessment without prescribing ambition.

---

## 10. Methodology

### 10.1 Definition

A **Methodology** describes the approach used to measure, calculate, or estimate a metric or trajectory.

Examples include:
- calculation standards,
- estimation techniques,
- allocation rules.

---

### 10.2 Characteristics

A Methodology:
- is referenced, not embedded,
- may evolve independently of metrics,
- may reference external sources.

Methodologies provide transparency without locking implementations.

---

## 11. Evidence

### 11.1 Definition

**Evidence** represents supporting artefacts used to substantiate assertions.

Examples include:
- invoices,
- meter readings,
- contracts,
- system logs,
- policy documents.

---

### 11.2 Characteristics

Evidence:
- is linked to assertions or metrics,
- is not stored within CERM,
- supports verification and assurance processes.

CERM defines **relationships to evidence**, not evidence storage.

---

## 12. Assertion

### 12.1 Definition

An **Assertion** represents a claim made about sustainability performance at a specific point in time.

Assertions may be:
- quantitative (e.g. a metric value),
- qualitative (e.g. existence of a policy),
- forward-looking (e.g. a target).

---

### 12.2 Characteristics

An Assertion:
- references one or more canonical elements,
- is bound by time and boundary,
- may be assured or unaudited,
- is immutable once issued.

Assertions are the atomic units of auditability.

---

## 13. Relationships Between Elements

CERM defines explicit relationships, including:

- Entities **perform** Activities
- Activities **generate** Metrics
- Metrics **apply within** Boundaries
- Metrics **occur during** Time Periods
- Targets **reference** Metrics
- Trajectories **support** Targets
- Methodologies **govern** Metrics and Trajectories
- Evidence **supports** Assertions
- Assertions **declare** values or states

All relationships are directional and explicitly documented.

---

## 14. Versioning and Identity

Each canonical element:
- has a stable identifier,
- is versioned when definitions change,
- may be superseded but not deleted.

Historical versions remain referenceable to preserve audit trails.

---

## 15. Non-Goals of the Reference Model

The reference model does not:
- embed reporting framework semantics,
- encode compliance logic,
- perform calculations,
- validate correctness of data.

These concerns are intentionally delegated to higher architectural layers.

---

## 16. Summary

The CERM reference model establishes a **minimal but complete set of canonical elements** required to describe sustainability performance in a structured, auditable, and reusable manner.

By separating facts, intent, methodology, and disclosure, the model enables long-term interoperability across evolving reporting landscapes.

---

*Version: v1.0.0*
