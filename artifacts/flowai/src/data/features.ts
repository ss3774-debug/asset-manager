export interface Feature {
  id: string;
  title: string;
  description: string;
  color: 'blue' | 'violet' | 'emerald';
  iconPath: string;
}

export const FEATURES: Feature[] = [
  { id: 'workflow-builder', title: 'AI Workflow Builder', description: 'Design complex multi-step automations visually. Our AI suggests the next best action at every step, dramatically reducing setup time.', color: 'blue', iconPath: 'M13 2L3 14H12L11 22L21 10H12L13 2Z' },
  { id: 'doc-processing', title: 'Smart Document Processing', description: 'Extract structured data from any document format with 99.2% accuracy. Contracts, invoices, forms — processed in seconds.', color: 'violet', iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'integrations', title: '200+ Integrations', description: 'Connect every tool your team uses. CRMs, ERPs, databases, communication tools — FlowAI speaks every language.', color: 'emerald', iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
  { id: 'analytics', title: 'Real-Time Analytics', description: 'Live dashboards that surface workflow bottlenecks, success rates, and ROI metrics the moment they happen.', color: 'blue', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'knowledge', title: 'AI Knowledge Assistant', description: 'An AI that learns your business processes and proactively answers questions from your internal knowledge base.', color: 'violet', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { id: 'security', title: 'Enterprise Security', description: 'SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, audit logs, and data residency controls.', color: 'emerald', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'collaboration', title: 'Team Collaboration', description: 'Build, share, and iterate on workflows together. Version control, comments, and granular permissions included.', color: 'blue', iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { id: 'insights', title: 'Predictive AI Insights', description: "Anticipate workflow failures before they happen. FlowAI's predictive engine flags risks 24 hours in advance.", color: 'violet', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
];
