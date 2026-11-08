const linkedIn = 'https://www.linkedin.com/in/vicus-brits/'

export const site = {
  name: 'Vicus Brits',
  title: 'Vicus Brits | Business & Technology Transformation Executive',
  description:
    'Vicus Brits is a business and technology executive exploring enterprise transformation, AI-enabled engineering, architecture and the future of human-led technology delivery.',
  linkedIn,
  publication: 'https://writing.vicusbrits.com',
  labSection: null as string | null,
  perspectivesSection: null as string | null,
  experiment: linkedIn,
  // Place a portrait in public/ and set this to its root-relative URL.
  portrait: null as string | null,
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
    { label: 'The Lab', href: '#lab' },
    { label: 'Writing', href: '#writing' },
    { label: 'Connect', href: '#connect' },
  ],
  footerNavigation: [
    { label: 'About', href: '#about', external: false },
    { label: 'The Lab', href: '#lab', external: false },
    { label: 'Writing', href: '#writing', external: false },
    { label: 'LinkedIn', href: linkedIn, external: true },
  ],
}
