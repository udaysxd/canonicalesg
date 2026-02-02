export default function GovernancePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Governance and Licensing
        </h1>

        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          This page describes the governance principles, licensing terms, and change control approach for Canonical ESG.
        </p>

        <p className="text-slate-600 mb-8 leading-relaxed">
          Canonical ESG is published as an open, non-authoritative reference system intended for broad reuse and adaptation.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Governance Principles</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG is governed by the following principles:
        </p>
        <p className="text-slate-600 mb-2"><strong>Neutrality</strong></p>
        <p className="text-slate-600 mb-4 ml-4">
          Canonical ESG is independent of vendors, jurisdictions, and standards-setting bodies.
        </p>
        <p className="text-slate-600 mb-2"><strong>Transparency</strong></p>
        <p className="text-slate-600 mb-4 ml-4">
          All canonical content is publicly accessible and versioned.
        </p>
        <p className="text-slate-600 mb-2"><strong>Non-Authority</strong></p>
        <p className="text-slate-600 mb-4 ml-4">
          Canonical ESG does not issue requirements, interpretations, or compliance determinations.
        </p>
        <p className="text-slate-600 mb-2"><strong>Stability Through Versioning</strong></p>
        <p className="text-slate-600 mb-8 ml-4">
          Changes are managed through explicit version releases rather than silent modification.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Change Control</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG evolves through documented versioned releases.
        </p>
        <p className="text-slate-600 mb-2">Changes may include:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>clarifications,</li>
          <li>structural refinements,</li>
          <li>extensions of scope.</li>
        </ul>
        <p className="text-slate-600 mb-4">
          Breaking changes are introduced only through new major versions.
        </p>
        <p className="text-slate-600 mb-8">
          Previous versions remain available for reference.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Licensing</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG content is published under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.
        </p>
        <p className="text-slate-600 mb-2">This license permits:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>copying and redistribution,</li>
          <li>adaptation and modification,</li>
          <li>commercial and non-commercial use,</li>
        </ul>
        <p className="text-slate-600 mb-8">
          provided appropriate attribution is given.
        </p>
        <p className="text-slate-600 mb-8">
          No additional permissions are required.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">Use and Reliance</h2>
        <p className="text-slate-600 mb-4">
          Canonical ESG is provided for informational and reference purposes only.
        </p>
        <p className="text-slate-600 mb-2">Users are responsible for:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>determining applicability to their context,</li>
          <li>complying with applicable laws and standards,</li>
          <li>exercising professional judgement.</li>
        </ul>
        <p className="text-slate-600 mb-8">
          Canonical ESG does not provide legal, regulatory, or assurance advice.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-8">No Endorsement</h2>
        <p className="text-slate-600 mb-2">Canonical ESG:</p>
        <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
          <li>is not endorsed by any standards-setting body,</li>
          <li>does not endorse any reporting framework,</li>
          <li>does not represent regulatory or legal authority.</li>
        </ul>
        <p className="text-slate-600 mb-8">
          All references to external standards are for informational purposes only.
        </p>

        <p className="text-sm text-slate-400 mt-8">
          Canonical ESG is provided "as is" without warranty of any kind, express or implied.
        </p>
      </div>
    </main>
  );
}
