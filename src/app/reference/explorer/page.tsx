'use client';

import { useState } from 'react';
import Link from 'next/link';
import { architectureGraph } from '@/lib/graph/buildGraph';

export default function ExplorerIndexPage() {
  const { nodes } = architectureGraph;
  const [activeTab, setActiveTab] = useState<'cerm' | 'cdi' | 'cmp' | 'sss'>('cerm');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sub-tab states
  const [activeCdiDomain, setActiveCdiDomain] = useState<string>('all');
  const [activeCmpFramework, setActiveCmpFramework] = useState<string>('all');

  // Group nodes by layer
  const cermNodes = nodes.filter(n => n.layer === 'cerm');
  const cdiNodes = nodes.filter(n => n.layer === 'cdi');
  const cmpNodes = nodes.filter(n => n.layer === 'cmp');
  const sssNodes = nodes.filter(n => n.layer === 'sss');

  // Search functionality
  const searchResults = {
    cerm: cermNodes.filter(n => 
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.id.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    cdi: cdiNodes.filter(n => 
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.id.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    cmp: cmpNodes.filter(n => 
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.id.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    sss: sssNodes.filter(n => 
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
  };

  const totalSearchResults = Object.values(searchResults).reduce((sum, results) => sum + results.length, 0);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Architecture Explorer
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Navigate the Canonical ESG architecture across all layers. 
          Explore relationships between CERM elements, CDI intents, CMP mappings, and SSS statements.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search across all layers... (name or ID)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="mt-2 text-sm text-gray-500">
            {totalSearchResults} result{totalSearchResults !== 1 ? 's' : ''} found
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchQuery && totalSearchResults > 0 && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Results</h3>
          
          {searchResults.cerm.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                CERM ({searchResults.cerm.length})
              </h4>
              <div className="space-y-2">
                {searchResults.cerm.map((node) => (
                  <Link
                    key={node.id}
                    href={`/reference/explorer/cerm/${node.id}`}
                    onClick={() => { setActiveTab('cerm'); setSearchQuery(''); }}
                    className="block p-2 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{node.name}</div>
                    <div className="text-xs text-gray-500 font-mono">{node.id}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {searchResults.cdi.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                CDI ({searchResults.cdi.length})
              </h4>
              <div className="space-y-2">
                {searchResults.cdi.map((node) => (
                  <Link
                    key={node.id}
                    href={`/reference/explorer/cdi/${node.id}`}
                    onClick={() => { setActiveTab('cdi'); setSearchQuery(''); }}
                    className="block p-2 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{node.name}</div>
                    <div className="text-xs text-gray-500 font-mono">{node.id}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {searchResults.cmp.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                CMP ({searchResults.cmp.length})
              </h4>
              <div className="space-y-2">
                {searchResults.cmp.map((node) => (
                  <Link
                    key={node.id}
                    href={`/reference/explorer/cmp/${node.id}`}
                    onClick={() => { setActiveTab('cmp'); setSearchQuery(''); }}
                    className="block p-2 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{node.name}</div>
                    <div className="text-xs text-gray-500 font-mono">{node.id}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {searchResults.sss.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                SSS ({searchResults.sss.length})
              </h4>
              <div className="space-y-2">
                {searchResults.sss.map((node) => (
                  <Link
                    key={node.id}
                    href={`/reference/explorer/sss/${node.id}`}
                    onClick={() => { setActiveTab('sss'); setSearchQuery(''); }}
                    className="block p-2 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{node.name}</div>
                    <div className="text-xs text-gray-500 font-mono">{node.id}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex space-x-8">
          {[
            { id: 'cerm', label: 'CERM', name: 'Canonical Element Reference Model', count: cermNodes.length },
            { id: 'cdi', label: 'CDI', name: 'Canonical Disclosure Intents', count: cdiNodes.length },
            { id: 'cmp', label: 'CMP', name: 'Canonical Mapping Packs', count: cmpNodes.length },
            { id: 'sss', label: 'SSS', name: 'Structured Sustainability Statements', count: sssNodes.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-1 border-b-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              <span className="text-sm text-gray-400 ml-1">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'cerm' && (
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {nodes.find(n => n.layer === 'cerm')?.name || 'CERM — Canonical Element Reference Model'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {cermNodes.length} canonical element types defining the foundational data layer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cermNodes.map((node) => (
              <Link
                key={node.id}
                href={`/reference/explorer/cerm/${node.id}`}
                className="border border-gray-200 p-3 hover:border-gray-400 transition-colors text-sm"
              >
                <div className="font-medium text-gray-900">{node.name}</div>
                <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'cdi' && (
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              CDI — Canonical Disclosure Intents
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {cdiNodes.length} disclosure intents across 13 domains
            </p>
          </div>
          
          {/* CDI Domain Sub-tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCdiDomain('all')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeCdiDomain === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All ({cdiNodes.length})
              </button>
              {['biod', 'clim', 'comm', 'cons', 'econ', 'ener', 'govr', 'matr', 'poll', 'vcwk', 'waste', 'watr', 'work'].map((domain) => {
                const domainName = {
                  'biod': 'Biodiversity',
                  'clim': 'Climate',
                  'comm': 'Affected Communities',
                  'cons': 'Consumers',
                  'econ': 'Economic',
                  'ener': 'Energy',
                  'govr': 'Governance',
                  'matr': 'Materials',
                  'poll': 'Pollution',
                  'vcwk': 'Value Chain Workers',
                  'waste': 'Waste',
                  'watr': 'Water',
                  'work': 'Workforce'
                }[domain];
                const count = cdiNodes.filter(n => n.id.split('-')[1].toLowerCase() === domain).length;
                return (
                  <button
                    key={domain}
                    onClick={() => setActiveCdiDomain(domain)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      activeCdiDomain === domain
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {domainName} ({count})
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Display CDIs based on selected domain */}
          {(() => {
            // Group CDIs by domain (extract domain from CDI ID)
            const cdiByDomain = cdiNodes.reduce((acc, node) => {
              const domain = node.id.split('-')[1].toLowerCase(); // Extract domain from CDI-[DOMAIN]-XX
              if (!acc[domain]) {
                acc[domain] = [];
              }
              acc[domain].push(node);
              return acc;
            }, {} as Record<string, typeof cdiNodes>);
            
            // Domain name mapping
            const domainNames: Record<string, string> = {
              'biod': 'Biodiversity',
              'clim': 'Climate',
              'comm': 'Affected Communities',
              'cons': 'Consumers',
              'econ': 'Economic',
              'ener': 'Energy',
              'govr': 'Governance',
              'matr': 'Materials',
              'poll': 'Pollution',
              'vcwk': 'Value Chain Workers',
              'waste': 'Waste',
              'watr': 'Water',
              'work': 'Workforce'
            };
            
            // Filter domains based on selection
            const domainsToShow = activeCdiDomain === 'all' 
              ? Object.keys(cdiByDomain)
              : [activeCdiDomain];
            
            // Sort domains alphabetically by full name
            const sortedDomains = domainsToShow.sort((a, b) => 
              (domainNames[a] || a).localeCompare(domainNames[b] || b)
            );
            
            return sortedDomains.map((domain) => (
              <div key={domain} className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {domainNames[domain] || domain.charAt(0).toUpperCase() + domain.slice(1)} Domain
                  <span className="text-sm text-gray-500 ml-2">
                    ({cdiByDomain[domain].length} intents)
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cdiByDomain[domain].map((node) => (
                    <Link
                      key={node.id}
                      href={`/reference/explorer/cdi/${node.id}`}
                      className="border border-gray-200 p-3 hover:border-gray-400 transition-colors text-sm"
                    >
                      <div className="font-medium text-gray-900">{node.name}</div>
                      <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ));
          })()}
        </section>
      )}

      {activeTab === 'cmp' && (
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              CMP — Canonical Mapping Packs
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {cmpNodes.length} framework mappings documenting interpretive relationships
            </p>
          </div>
          
          {/* CMP Framework Sub-tabs */}
          <div className="mb-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCmpFramework('all')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeCmpFramework === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All ({cmpNodes.length})
              </button>
              {['CDP', 'ESRS', 'GRI', 'IFRS', 'SASB', 'TNFD', 'UNSD'].map((framework) => {
                const frameworkName = {
                  'CDP': 'CDP',
                  'ESRS': 'ESRS EU',
                  'GRI': 'GRI',
                  'IFRS': 'IFRS',
                  'SASB': 'SASB',
                  'TNFD': 'TNFD',
                  'UNSD': 'UN SDG'
                }[framework];
                const count = cmpNodes.filter(n => n.id.split('-')[1] === framework).length;
                return (
                  <button
                    key={framework}
                    onClick={() => setActiveCmpFramework(framework)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      activeCmpFramework === framework
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {frameworkName} ({count})
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Display CMPs based on selected framework */}
          {(() => {
            // Group CMPs by framework (extract framework from CMP ID)
            const cmpByFramework = cmpNodes.reduce((acc, node) => {
              const framework = node.id.split('-')[1]; // Extract framework from CMP-[FRAMEWORK]-XXX
              if (!acc[framework]) {
                acc[framework] = [];
              }
              acc[framework].push(node);
              return acc;
            }, {} as Record<string, typeof cmpNodes>);
            
            // Framework name mapping
            const frameworkNames: Record<string, string> = {
              'CDP': 'CDP',
              'ESRS': 'ESRS EU',
              'GRI': 'GRI',
              'IFRS': 'IFRS',
              'SASB': 'SASB',
              'TNFD': 'TNFD',
              'UNSD': 'UN SDG'
            };
            
            // Filter frameworks based on selection
            const frameworksToShow = activeCmpFramework === 'all'
              ? Object.keys(cmpByFramework)
              : [activeCmpFramework];
            
            // Sort frameworks alphabetically by full name
            const sortedFrameworks = frameworksToShow.sort((a, b) => 
              (frameworkNames[a] || a).localeCompare(frameworkNames[b] || b)
            );
            
            return sortedFrameworks.map((framework) => (
              <div key={framework} className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {frameworkNames[framework] || framework} Framework
                  <span className="text-sm text-gray-500 ml-2">
                    ({cmpByFramework[framework].length} mappings)
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cmpByFramework[framework].map((node) => (
                    <Link
                      key={node.id}
                      href={`/reference/explorer/cmp/${node.id}`}
                      className="border border-gray-200 p-3 hover:border-gray-400 transition-colors text-sm"
                    >
                      <div className="font-medium text-gray-900">{node.name}</div>
                      <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ));
          })()}
        </section>
      )}

      {activeTab === 'sss' && (
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              SSS — Structured Sustainability Statements
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {sssNodes.length} presentation format templates
            </p>
          </div>
          <div className="space-y-2">
            {sssNodes.map((node) => (
              <Link
                key={node.id}
                href={`/reference/explorer/sss/${node.id}`}
                className="flex items-center justify-between border border-gray-200 p-3 hover:border-gray-400 transition-colors"
              >
                <div>
                  <div className="font-medium text-gray-900">{node.name}</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">{node.id}</div>
                </div>
                <span className="text-xs text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
