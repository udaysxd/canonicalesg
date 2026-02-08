export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Model sustainability data once. Reuse it across standards.
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical ESG is open, non-authoritative semantic infrastructure for sustainability reporting.
        </p>

        <p className="text-[#1a1a1a] mb-4 leading-relaxed">
          It enables organisations to model sustainability data once and reuse it consistently across major reporting frameworks, including those developed by the European Financial Reporting Advisory Group (ESRS), Global Reporting Initiative (GRI), the IFRS Foundation (ISSB), and CDP — without redefining meaning each time.
        </p>

        <p className="text-[#1a1a1a] mb-4 leading-relaxed">
          Canonical ESG separates:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>canonical data structures,</li>
          <li>disclosure meaning, and</li>
          <li>framework-specific interpretation.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          This structural separation reduces duplication, inconsistency, and rework in sustainability reporting.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-6">Core Architecture</h2>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-[1.25rem] font-semibold text-[#111] mb-2">CERM</h3>
            <p className="text-[#666] mb-2">Canonical ESG Reference Model</p>
            <p className="text-[#1a1a1a]">Framework-independent data structures for sustainability metrics, targets, evidence, and traceability.</p>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-semibold text-[#111] mb-2">CDI</h3>
            <p className="text-[#666] mb-2">Canonical Disclosure Intents</p>
            <p className="text-[#1a1a1a] mb-2">Stable, framework-neutral definitions of what an organisation intends to disclose.</p>
            <p className="text-[#1a1a1a] mb-2">CDIs define meaning only.</p>
            <p className="text-[#1a1a1a]">They do not assert compliance or interpret regulation.</p>
          </div>

          <div>
            <h3 className="text-[1.25rem] font-semibold text-[#111] mb-2">CMP</h3>
            <p className="text-[#666] mb-2">Canonical Mapping Packs</p>
            <p className="text-[#1a1a1a] mb-2">Explicit documentation of how disclosure intent is interpreted by specific reporting standards and jurisdictions.</p>
            <p className="text-[#1a1a1a]">CMPs preserve semantic integrity while making interpretation transparent.</p>
          </div>
        </div>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-6">A concrete example</h2>

        <p className="text-[#1a1a1a] mb-4">
          A company's Scope 1 greenhouse gas emissions can be defined once at the CDI level.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          That same disclosure intent can then be mapped — through CMP — to:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>ESRS E1 requirements,</li>
          <li>GRI 305 disclosures,</li>
          <li>IFRS S2 climate requirements,</li>
          <li>CDP Climate questionnaire fields.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-4">
          The meaning of the disclosure remains stable.
          Only the interpretation layer changes.
        </p>

        <p className="text-[#1a1a1a] mb-10">
          This is the interoperability Canonical ESG is designed to enable.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-6">Why Canonical ESG exists</h2>

        <p className="text-[#1a1a1a] mb-4">
          Sustainability reporting now requires organisations to respond to overlapping frameworks, jurisdictional mandates, and stakeholder expectations — often using structurally different disclosure models.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          Organisations are asked to report similar information across multiple frameworks, using different terminology, structures, and assumptions.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          This has led to:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>duplicated effort,</li>
          <li>inconsistent interpretation,</li>
          <li>limited reuse of disclosed information,</li>
          <li>reduced transparency into how disclosures are derived.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10">
          Canonical ESG addresses this structural problem.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">The underlying issue</h3>

        <p className="text-[#1a1a1a] mb-4">
          Most sustainability frameworks are designed to answer what should be disclosed.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          They are not designed to:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>separate data from disclosure meaning,</li>
          <li>make interpretation decisions explicit,</li>
          <li>enable reuse across frameworks,</li>
          <li>support machine-readable validation and automation.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10">
          As a result, interpretation happens repeatedly, informally, and inconsistently — often inside spreadsheets, consulting workpapers, or proprietary software systems.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">A structural, not normative, response</h3>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG does not introduce new reporting requirements.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          It does not compete with standards.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          It provides a neutral reference architecture that:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>separates data modelling from disclosure meaning,</li>
          <li>separates disclosure meaning from framework-specific interpretation,</li>
          <li>documents interpretation explicitly without asserting authority.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10">
          This separation allows existing standards to coexist while reducing duplication and ambiguity.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">Designed to coexist with standards</h3>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG does not replace sustainability reporting frameworks.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          Framework texts remain authoritative.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is designed to:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>work alongside ESRS, GRI, ISSB, CDP, and other frameworks,</li>
          <li>preserve professional judgement,</li>
          <li>support assurance and review processes,</li>
          <li>enable software systems without embedding hidden interpretive assumptions.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10">
          It references standards without endorsement and does not represent any standards-setting body.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">Why now</h3>

        <p className="text-[#1a1a1a] mb-4">
          Regulatory expansion, investor scrutiny, and digital reporting expectations are increasing the need for interoperability, auditability, and automation in sustainability reporting.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          As requirements expand across regions and stakeholders, organisations require a systematic way to:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>model information once,</li>
          <li>interpret it transparently,</li>
          <li>reuse it across outputs.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-10">
          Canonical ESG exists to provide that shared foundation.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">What Canonical ESG aims to enable</h3>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG aims to enable:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>clearer disclosure traceability,</li>
          <li>reduced interpretation risk,</li>
          <li>improved consistency across reports,</li>
          <li>structured collaboration between practitioners, auditors, and system architects,</li>
          <li>machine-readable modelling of sustainability disclosures.</li>
        </ul>

        <p className="text-[#1a1a1a] mb-4">
          It does not centralise authority.
          It does not define compliance.
          It does not determine materiality.
        </p>

        <p className="text-[#1a1a1a] mb-10">
          Users remain responsible for regulatory interpretation and professional judgement.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">Who Canonical ESG is for</h3>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is intended for:
        </p>

        <ul className="list-disc list-inside text-[#1a1a1a] mb-6 space-y-1.5">
          <li>ESG consultants and advisory firms</li>
          <li>Sustainability data architects</li>
          <li>ESG software vendors and system builders</li>
          <li>Regulatory modelling specialists</li>
          <li>Assurance and audit professionals</li>
          <li>Academic and interoperability researchers</li>
        </ul>

        <p className="text-[#1a1a1a] mb-4">
          It is not a reporting requirement.
          It is not compliance software.
          It is not a regulatory body.
        </p>

        <p className="text-[#1a1a1a] mb-10">
          It is semantic infrastructure.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">Governance and versioning</h3>

        <p className="text-[#1a1a1a] mb-4">
          CDI v1 is version-controlled and semantically stable.
        </p>

        <p className="text-[#1a1a1a] mb-10">
          CMPs evolve transparently as frameworks and jurisdictions change.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is currently stewarded by its founding team, with the intention to transition toward broader multi-stakeholder governance over time.
        </p>

        <h3 className="text-[1.25rem] font-semibold text-[#1a1a1a] mb-4 mt-8">A shared reference, not a single truth</h3>

        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is intentionally non-authoritative.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          Its value lies in making structure, meaning, and interpretation explicit — not in declaring what is correct.
        </p>

        <p className="text-[#1a1a1a] mb-4">
          It is a reference model for a reporting ecosystem that has outgrown ad hoc interpretation.
        </p>

        <p className="text-sm text-[#666] mt-12">
          Canonical ESG is a neutral reference system. It does not define reporting requirements, assert compliance, or represent endorsement by any standards-setting body.
        </p>
      </div>
    </main>
  );
}
