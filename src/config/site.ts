const linkedIn = 'https://www.linkedin.com/in/vicus-brits/'

export const site = {
  name: 'Vicus Brits',
  title: 'Vicus Brits | Business & Technology Transformation Executive',
  description:
    'Vicus Brits is a business and technology executive exploring enterprise transformation, AI-enabled engineering, architecture and the future of human-led technology delivery.',
  linkedIn,
  publication: 'https://vicusbrits.substack.com',
  labSection: 'https://vicusbrits.substack.com/s/the-lab-one-human-ai-in-the-loop',
  perspectivesSection: 'https://vicusbrits.substack.com/s/perspectives-ideas-observations-and',
  portrait: '/vicus-brits.webp' as string | null,
  navigation: [
    { label: 'The Lab', href: '#lab' },
    { label: 'Writing', href: '#writing' },
    { label: 'Connect', href: '#connect' },
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
  ],
  footerNavigation: [
    { label: 'The Lab', href: '#lab', external: false },
    { label: 'Writing', href: '#writing', external: false },
    { label: 'About', href: '#about', external: false },
    { label: 'LinkedIn', href: linkedIn, external: true },
  ],
}
