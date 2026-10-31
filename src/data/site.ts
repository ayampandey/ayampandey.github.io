const base = import.meta.env.BASE_URL

export const site = {
  name: 'Ayam Pandey',
  positioning: ['Legal Technology', 'Legal Engineering', 'Applied AI'],
  headline: { lead: 'Turning legal problems into', emphasis: 'practical', tail: 'technology.' },
  intro:
    'A law and data science graduate focused on legal engineering, applied AI and improving how legal work gets done.',
  email: 'pandeyayam@outlook.com',
  links: {
    github: 'https://github.com/ayampandey',
    linkedin: 'https://www.linkedin.com/in/ayam-pandey-776289215/',
    resume: `${base}Ayam_Pandey_Resume.pdf`,
  },
} as const

export const navigation = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

export const approach = {
  statement:
    'Law runs on language that is dense, precise and consequential. My work in legal technology is about handling it carefully, whether that means extracting structure from judgments, comparing contract versions or testing whether AI output is reliable enough to use.',
  pillars: [
    {
      title: 'Legal reasoning',
      body: 'Grounded in a five-year integrated law degree, with training in statutory interpretation, legal reasoning, corporate and commercial law, legal research, drafting and regulatory analysis.',
    },
    {
      title: 'Applied AI',
      body: 'Prompt engineering and evaluation of LLM output for legal tasks, alongside machine learning on legal text in Python.',
    },
    {
      title: 'Legal engineering',
      body: 'Translating legal requirements into workflows, business rules and practical tools, from prototypes to implementation work.',
    },
  ],
} as const
