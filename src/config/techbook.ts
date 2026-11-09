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
  { title: 'AI skills and instructions', resources: [] },
  { title: 'Other project artefacts', resources: [] },
]
