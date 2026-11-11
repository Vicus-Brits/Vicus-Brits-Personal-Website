export interface TechBookResource {
  name: string
  description: string
  version: string
  url: string
}

export interface TechBookResourceCategory {
  title: string
  resources: TechBookResource[]
}

export const techbookResources: TechBookResourceCategory[] = [
  { title: 'Architecture and diagrams', resources: [] },
  {
    title: 'Documents and decisions',
    resources: [{
      name: 'Requirements Decision & Assurance Log',
      description: 'Human-approved decisions, requirements assurance findings, residual risks, and gate approvals.',
      version: 'Requirements Baseline v1.0',
      url: '/lab/techbook/requirements-decision-assurance-log',
    }],
  },
  {
    title: 'AI skills and instructions',
    resources: [
      {
        name: 'Research Agent',
        description: 'Market and product intelligence research instructions.',
        version: 'Agent instructions',
        url: '/lab/techbook/research-agent',
      },
      {
        name: 'Requirements Agent',
        description: 'Human-governed requirements discovery and approval instructions.',
        version: 'Agent instructions',
        url: '/lab/techbook/requirements-agent',
      },
      {
        name: 'Requirements Assurance Agent',
        description: 'Independent review of requirements, acceptance criteria, traceability, and risks.',
        version: 'Agent instructions',
        url: '/lab/techbook/requirements-assurance-agent',
      },
    ],
  },
  {
    title: 'Other project artefacts',
    resources: [
      {
        name: 'Market Research',
        description: 'Evidence-backed comparison of service booking, field-service products, and AI capabilities.',
        version: 'Research report',
        url: '/lab/techbook/market-research',
      },
      {
        name: 'Business Intent Brief',
        description: 'Current TechBook business intent, approved scope, outcomes, and constraints.',
        version: 'Current intent',
        url: '/lab/techbook/business-intent',
      },
      {
        name: 'Requirements Specification',
        description: 'Approved, traceable TechBook requirements baseline with scenarios and acceptance criteria.',
        version: 'Requirements Baseline v1.0',
        url: '/lab/techbook/requirements-specification',
      },
    ],
  },
]
