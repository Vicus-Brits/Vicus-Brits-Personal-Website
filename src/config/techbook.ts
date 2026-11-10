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
  { title: 'Documents and decisions', resources: [] },
  {
    title: 'AI skills and instructions',
    resources: [{
      name: 'Research Agent',
      description: 'Market and product intelligence research instructions.',
      version: 'Agent instructions',
      url: '/lab/techbook/research-agent',
    }],
  },
  {
    title: 'Other project artefacts',
    resources: [{
      name: 'Market Research',
      description: 'Evidence-backed comparison of service booking, field-service products, and AI capabilities.',
      version: 'Research report',
      url: '/lab/techbook/market-research',
    }],
  },
]
