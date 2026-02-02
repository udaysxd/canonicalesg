export default function GovernancePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div>
        <h1 className="text-[2.25rem] font-semibold text-[#111] mb-4 leading-tight">
          Governance and Licensing
        </h1>

        <p className="text-[1.0625rem] text-[#1a1a1a] mb-4 leading-relaxed">
          This page describes the governance principles, licensing terms, and change control approach for Canonical ESG.
        </p>

        <p className="text-[#1a1a1a] mb-10 leading-relaxed">
          Canonical ESG is published as an open, non-authoritative reference system intended for broad reuse and adaptation.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Governance Principles</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is governed by the following principles:
        </p>
        <p className="text-[#1a1a1a] mb-2"><strong className="font-semibold text-[#111]">Neutrality</strong></p>
        <p className="text-[#1a1a1a] mb-4 ml-4">
          Canonical ESG is independent of vendors, jurisdictions, and standards-setting bodies.
        </p>
        <p className="text-[#1a1a1a] mb-2"><strong className="font-semibold text-[#111]">Transparency</strong></p>
        <p className="text-[#1a1a1a] mb-4 ml-4">
          All canonical content is publicly accessible and versioned.
        </p>
        <p className="text-[#1a1a1a] mb-2"><strong className="font-semibold text-[#111]">Non-Authority</strong></p>
        <p className="text-[#1a1a1a] mb-4 ml-4">
          Canonical ESG does not issue requirements, interpretations, or compliance determinations.
        </p>
        <p className="text-[#1a1a1a] mb-2"><strong className="font-semibold text-[#111]">Stability Through Versioning</strong></p>
        <p className="text-[#1a1a1a] mb-10 ml-4">
          Changes are managed through explicit version releases rather than silent modification.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Change Control</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG evolves through documented versioned releases.
        </p>
        <p className="text-[#1a1a1a] mb-2">Changes may include:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>clarifications,</li>
          <li>structural refinements,</li>
          <li>extensions of scope.</li>
        </ul>
        <p className="text-[#1a1a1a] mb-4">
          Breaking changes are introduced only through new major versions.
        </p>
        <p className="text-[#1a1a1a] mb-10">
          Previous versions remain available for reference.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Licensing</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG content is published under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.
        </p>
        <p className="text-[#1a1a1a] mb-2">This license permits:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>copying and redistribution,</li>
          <li>adaptation and modification,</li>
          <li>commercial and non-commercial use,</li>
        </ul>
        <p className="text-[#1a1a1a] mb-4">
          provided appropriate attribution is given.
        </p>
        <p className="text-[#1a1a1a] mb-10">
          No additional permissions are required.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">Use and Reliance</h2>
        <p className="text-[#1a1a1a] mb-4">
          Canonical ESG is provided for informational and reference purposes only.
        </p>
        <p className="text-[#1a1a1a] mb-2">Users are responsible for:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>determining applicability to their context,</li>
          <li>complying with applicable laws and standards,</li>
          <li>exercising professional judgement.</li>
        </ul>
        <p className="text-[#1a1a1a] mb-10">
          Canonical ESG does not provide legal, regulatory, or assurance advice.
        </p>

        <h2 className="text-[1.5rem] font-semibold text-[#1a1a1a] mb-3 mt-10">No Endorsement</h2>
        <p className="text-[#1a1a1a] mb-2">Canonical ESG:</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mb-4 space-y-1.5">
          <li>is not endorsed by any standards-setting body,</li>
          <li>does not endorse any reporting framework,</li>
          <li>does not represent regulatory or legal authority.</li>
        </ul>
        <p className="text-[#1a1a1a] mb-10">
          All references to external standards are for informational purposes only.
        </p>

        <p className="text-sm text-[#666] mt-10">
          Canonical ESG is provided "as is" without warranty of any kind, express or implied.
        </p>
      </div>
    </main>
  );
}
